import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScraperModule } from './scraper/scraper.module'; // Import ScraperModule

@Module({
  imports: [ScraperModule], // Use ScraperModule to provide ScraperService
  controllers: [AppController],
  providers: [AppService], // AppService remains here
})
export class AppModule {}
