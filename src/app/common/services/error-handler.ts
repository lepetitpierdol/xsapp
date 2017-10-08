import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {NotificationService} from './notification';

@Injectable()
export class ErrorHandlerService {
  constructor(private notificationService: NotificationService) {
    
  }

  public handle(err: any): void {
    if (err instanceof Response) {
      this.rejectedByServer(err.status);
    } else if (err instanceof Error) {
      this.notificationService.throw(err.message);
    } else {
      this.notificationService.throw('Nieznany bład');
    }
  }

  private rejectedByServer(statusCode: number): void {
    let msg = {
      400: 'Zła prośba',
      401: 'Nieautoryzowany dostęp',
      403: 'Dostęp zabroniony',
      404: 'Nie znaleziono',
      405: 'Niedozwolona metoda',
      500: 'Błąd serwera',
      502: 'Błąd serwera',
      503: 'Serwer niedostępny'
    };

    this.notificationService.throw(statusCode + ': ' + msg[statusCode] || 'Nieznany błąd');
  }
}