import { Controller, Get, Query } from '@nestjs/common';
import { ScraperService } from './scraper/scraper.service';

@Controller()
export class AppController {
  constructor(private readonly scraperService: ScraperService) {}

  @Get('/scrape')
  async scrape(@Query('url') url: string) {
    if (!url) return { error: 'Please provide a valid URL.' };
    const data = await this.scraperService.scrapeJobData(url);
    return { data };
  }
}
