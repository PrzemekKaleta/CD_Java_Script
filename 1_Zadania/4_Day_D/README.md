<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

#  jQuery - modyfikowanie elementów

> Wszystkie zadania rozwiązuj w przygotowanych do tego plikach.

Zadania rozwiązuj w pliku `app.js`, chyba, że w poleceniu podano inny plik.
Pamiętaj, żeby oddzielać zadania komentarzami i pisać czytelny, dobrze sformatowany kod.  

**Nie modyfikuj kodu HTML/CSS, chyba że w poleceniu jest napisane inaczej**.

**WAŻNE -  nie zmieniaj struktury/nazw plików oraz korzystaj z przygotowanych zmiennych**

#### Zadanie 1 - rozwiązywane z wykładowcą

Znajdź w pliku `index.html` element o **klasie** ```people```.  
Stwórz odpowiednią funkcję, wewnątrz której ustaw event ```click``` na przycisku ```dodaj```.  
Po kliknięciu wykonaj następujące czynności:
1. Pobierz do zmiennej wartość wpisaną do pola o **id** ```addUser```.
2. Pobierz do zmiennej wartość wpisaną do pola o **id** ```age```.
3. Wstaw nowy element na koniec listy, ustaw jej wiek jako atrybut ```data```.
4. Po każdym wstawieniu elementu wywołaj osobną funkcję, która będzie ustawiała dany kolor dla elementu **li** w następujący sposób:
   * zielony dla osób w wieku do `15` lat,
   * niebieski dla osób mających od `16` do `40` lat,
   * brązowy dla osób mających `41` lat i więcej.
  
-------------------------------------------------------------------------------

#### Zadanie 2

1. Znajdź w pliku `index.html` element o **klasie** ```where-i-am```.  
2. Znajdź element `div` w elemencie z pkt. 1  
3. Następnie stwórz odpowiednią funkcję, wewnątrz której stwórz elementy **span** i dodaj je w odpowiednie miejsca według obrazka poniżej.
4. W miejsce trzech kropek wstaw nazwę funkcji, której używasz,   np. ```Jestem tutaj append```.
   Nie zmieniaj kodu HTML.

![Where I am](images/where-i-am.png)
