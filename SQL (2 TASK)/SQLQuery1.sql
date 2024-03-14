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
