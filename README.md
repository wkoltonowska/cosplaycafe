

# CosPlayCafe 

## Opis
Projekt powstał w ramach zajęć na studiach (Technologie internetowe).

Skład zespołu:
- frontend: Weronika Kołtonowska
- backend: Kacper Łątka
- treści: Jakub Kalinowski i Mikołaj Szaroleta
  
CosPlayCafe to projekt strony internetowej dla kawiarni tematycznej, która organizuje wydarzenia związane z cosplayem oraz serwuje różnorodne napoje i desery. Strona zawiera informacje o menu, wydarzeniach oraz możliwość rezerwacji miejsc.

## Technologie
- Frontend: HTML, CSS (SASS), JavaScript
- Backend: PHP
- Baza danych: MySQL 
- Serwer lokalny: XAMPP
- Font Awesome - ikony
- Bootstrap - sekcja wydarzenia
- AOS (Animate On Scroll) – animacje elementów przy przewijaniu strony

## Uruchomienie projektu

1. Skopiuj repozytorium na swój lokalny komputer:
   ```bash
   git clone  https://github.com/wkoltonowska/cosplaycafe.git
   

2. Przejdź do katalogu projektu:
   ```bash
   cd cosplaycafe

3. Utwórz w folderze js plik config.js i wprowadź w nim twój klucz:
```bash
   const CONFIG = {
   FONT_AWESOME_KIT: "TWÓJ_KLUCZ_FONTAWESOME",
   };
```
5. Skopiuj folder projektu do C:\xampp\htdocs\cosplaycafe\

6. Zaimportuj bazę danych do MySQL przez phpMyAdmin:

- Otwórz phpMyAdmin: http://localhost/phpmyadmin

- Wybierz Import, wskaż plik .sql z repozytorium (reservations.sql) i kliknij "Wykonaj"

6. Uruchom Apache i MySQL w XAMPP

7. Otwórz projekt w przeglądarce: http://localhost/cosplaycafe/index.html

8. Sprawdź zapisaną rezerwację w phpMyAdmin: http://localhost/phpmyadmin
   

## Funkcjonalności
- formularz kontaktowy
- rezerwacja stolika

Podgląd projektu:

<img width="1901" height="947" alt="image" src="https://github.com/user-attachments/assets/d94db521-74e5-4b7a-82f7-58e71a212133" />
<img width="1897" height="949" alt="image" src="https://github.com/user-attachments/assets/45b83c51-7fce-4cd0-9ba1-8164f997274d" />
<img width="1902" height="920" alt="image" src="https://github.com/user-attachments/assets/55baf338-117a-4454-9c03-d94e30fd6d11" />
<img width="1902" height="945" alt="image" src="https://github.com/user-attachments/assets/dc4a967d-f4fa-4ca8-87ae-9253c081bd22" />
<img width="1900" height="947" alt="image" src="https://github.com/user-attachments/assets/93b3a6a1-4db0-4c1b-a35a-050d4f7badae" />
<img width="1898" height="951" alt="image" src="https://github.com/user-attachments/assets/f6b0940b-623d-446e-b01b-3083409d499c" />
<img width="384" height="844" alt="image" src="https://github.com/user-attachments/assets/8fac9ec8-8dd7-4247-9bc9-90d3c35b7c0c" />
<img width="391" height="842" alt="image" src="https://github.com/user-attachments/assets/dee3fb5e-251f-4785-a663-2e3b4d3296a3" />






