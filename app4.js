const yearDiff = (date = new Date()) => {
    const currentYear = new Date().getFullYear();
    return currentYear - date.getFullYear();
};

export {
    yearDiff,
}