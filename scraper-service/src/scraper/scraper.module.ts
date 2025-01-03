import { Module } from '@nestjs/common';
import { ScraperService } from './scraper.service';

@Module({
  providers: [ScraperService],
  exports: [ScraperService], // Export to make it available for other modules
})
export class ScraperModule {}
