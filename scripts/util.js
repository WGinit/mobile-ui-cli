function toPascalCase(str) {
    return str
        .split(/[-_]/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('');
}

function toCamelCase(str) {
    const [first, ...rest] = str.split(/[-_]/);
    return first.toLowerCase() + rest.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
}

function toKebabCase(str) {
    return str
        .toLowerCase()
        .split(/\s+/)
        .join('-');
}

module.exports = {
    toPascalCase,
    toCamelCase,
    toKebabCase
}