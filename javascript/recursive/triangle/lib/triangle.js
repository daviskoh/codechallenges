function triangle (rows) {
    if (rows === 0 || rows === 1) {
        return rows;
    }

    return rows + triangle(rows - 1);
}

module.exports = triangle;