const generateMessage = (text, username) => {
    return {
        username,
        text: text,
        createdAt: new Date().getTime(),
    };
};

const generateLocationMessage = (url, username) => {
    return {
        url: url,
        username,
        createdAt: new Date(),
    };
};

module.exports = { generateMessage, generateLocationMessage };
