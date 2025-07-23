import fs from 'fs/promises';
import path from 'path';

interface ViewData {
  id: number;
  totalViews: number;
  lastViewedAt: string;
}

const DATA_FILE = path.join(process.cwd(), 'data', 'views.json');

export class FileViewStorage {
  private async ensureDataDirectory() {
    const dataDir = path.dirname(DATA_FILE);
    try {
      await fs.mkdir(dataDir, { recursive: true });
    } catch (error) {
      // Directory might already exist
    }
  }

  private async readViewData(): Promise<ViewData> {
    try {
      await this.ensureDataDirectory();
      const data = await fs.readFile(DATA_FILE, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      // File doesn't exist or is corrupted, return default
      const defaultData: ViewData = {
        id: 1,
        totalViews: 0,
        lastViewedAt: new Date().toISOString()
      };
      await this.writeViewData(defaultData);
      return defaultData;
    }
  }

  private async writeViewData(data: ViewData): Promise<void> {
    await this.ensureDataDirectory();
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
  }

  async getViewCount(): Promise<ViewData> {
    return await this.readViewData();
  }

  async incrementViewCount(): Promise<ViewData> {
    const currentData = await this.readViewData();
    const updatedData: ViewData = {
      id: 1,
      totalViews: currentData.totalViews + 1,
      lastViewedAt: new Date().toISOString()
    };
    await this.writeViewData(updatedData);
    return updatedData;
  }
}