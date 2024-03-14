# Тестовое задание Глобэкс АйТи
## Тестовое задание №1. Frontend
Для запуска нужно выполнить команды:
* Фронтенд
``` bash
cd frontend
yarn install
yarn dev -p 5000
```
* Сервер
``` bash
cd server
yarn start
```
![изображение](https://github.com/Mazilas2/TestGlobex/assets/104306822/97badd9a-901d-4455-9a71-f8c481f1eb9f)
## Тестовое задание №2. SQL
``` SQL
WITH RecursiveSubdivisions AS (
    SELECT id, name, parent_id, 0 AS sub_level
    FROM subdivisions
    WHERE id = (
        SELECT subdivision_id
        FROM collaborators
        WHERE name = 'Сотрудник 1'
    )
    UNION ALL
    SELECT s.id, s.name, s.parent_id, rs.sub_level + 1
    FROM subdivisions s
    INNER JOIN RecursiveSubdivisions rs ON s.parent_id = rs.id
),
CollaboratorCounts AS (
    SELECT s.id AS sub_id, COUNT(c.id) AS colls_count
    FROM RecursiveSubdivisions s
    LEFT JOIN collaborators c ON s.id = c.subdivision_id
    GROUP BY s.id
)
SELECT c.id, c.name, s.name AS sub_name, s.id AS sub_id, s.sub_level, cc.colls_count
FROM collaborators c
INNER JOIN RecursiveSubdivisions s ON c.subdivision_id = s.id
LEFT JOIN CollaboratorCounts cc ON s.id = cc.sub_id
WHERE c.age < 40
AND s.id NOT IN (100055, 100059)
ORDER BY s.sub_level;
```
### Результат:
| 710253 | Сотрудник 1  | Главное подразделение 1 | 100051 | 0 | 3 |
|--------|--------------|-------------------------|--------|---|---|
| 710259 | Сотрудник 7  | Главное подразделение 1 | 100051 | 0 | 3 |
| 710260 | Сотрудник 8  | Главное подразделение 1 | 100051 | 0 | 3 |
| 710261 | Сотрудник 9  | Подразделение 1.1       | 100053 | 1 | 2 |
| 710262 | Сотрудник 10 | Подразделение 1.1       | 100053 | 1 | 2 |
| 710263 | Сотрудник 11 | Подразделение 1.2       | 100054 | 1 | 2 |
| 710264 | Сотрудник 12 | Подразделение 1.2       | 100054 | 1 | 2 |
| 710271 | Сотрудник 19 | Подразделение 1.2.1     | 100060 | 2 | 3 |
| 710272 | Сотрудник 20 | Подразделение 1.2.1     | 100060 | 2 | 3 |
| 710273 | Сотрудник 21 | Подразделение 1.2.1     | 100060 | 2 | 3 |
| 710267 | Сотрудник 15 | Подразделение 1.1.1     | 100058 | 2 | 2 |
| 710268 | Сотрудник 16 | Подразделение 1.1.1     | 100058 | 2 | 2 |
| 710276 | Сотрудник 24 | Подразделение 1.2.1.1   | 100061 | 3 | 3 |
| 710268 | Сотрудник 16 | Подразделение 1.1.1     | 100058 | 2 | 2 |
| 710276 | Сотрудник 24 | Подразделение 1.2.1.1   | 100061 | 3 | 3 |

(затронуто строк: 13)

 Время работы SQL Server:
   Время ЦП = 0 мс, затраченное время = 1 мс.

Время выполнения: 2024-03-14T15:18:37.9592787+05:00

Все файлы расположены в папке ___SQL (2 TASK)___ 

## Тестовое задание №3. Backend
``` html
<html>

<head>
    <meta charset="UTF-8">
    <title>Task 3. Backend</title>
</head>

<body>
    <h1>List of Employees</h1>
    <ul>
        <%
            for (elem in collaborators)
            {
                %>
                <li><%= elem.fullname %></li>
                <%
            }
        %>
    </ul>
</body>

</html>
```

