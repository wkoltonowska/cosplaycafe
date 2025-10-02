

# CosPlayCafe Projekt

## Opis

CosPlayCafe to projekt strony internetowej dla kawiarni tematycznej, która organizuje wydarzenia związane z cosplayem oraz serwuje różnorodne napoje i desery. Strona zawiera informacje o menu, wydarzeniach oraz możliwość rezerwacji miejsc.

## Technologie
- Frontend: HTML, CSS (SASS), JavaScript
- Backend: PHP
- Baza danych: MySQL 
- Serwer lokalny: XAMPP

## Uruchomienie projektu

1. Skopiuj repozytorium na swój lokalny komputer:
   bash
   git clone  https://github.com/wkoltonowska/cosplaycafe.git
   

2. Przejdź do katalogu projektu:
   bash
   cd cosplaycafe
   

3. Skopiouj folder projektu do C:\xampp\htdocs\cosplaycafe\

4. Zaimportuj bazę danych do MySQL przez phpMyAdmin:

- Otwórz phpMyAdmin: http://localhost/phpmyadmin

- Wybierz Import, wskaż plik .sql z repozytorium (reservations.sql) i kliknij Wykonaj

- Spowoduje to utworzenie bazy reservations wraz z tabelą reservations i przykładowymi danymi

5. Uruchom Apache i MySQL w XAMPP

6. Otwór w przeglądarce: http://localhost/cosplaycafe/index.html

7. Sprawdzenie zapisanej rezerwacji w phpMyAdmin: http://localhost/phpmyadmin


