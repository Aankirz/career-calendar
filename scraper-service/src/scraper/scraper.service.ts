import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

@Injectable()
export class ScraperService {
  async scrapeJobData(url: string): Promise<any[]> {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(url, { waitUntil: 'domcontentloaded' });

      // Scrape job data
      const jobs = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('.job-listing')).map(
          (job) => ({
            title: job.querySelector('.job-title')?.textContent || '',
            link: job.querySelector('a')?.getAttribute('href') || '',
          }),
        );
      });

      await browser.close();
      return jobs;
    } catch (error) {
      console.error('Scraping error:', error);
      throw new Error('Failed to scrape data');
    }
  }
}
