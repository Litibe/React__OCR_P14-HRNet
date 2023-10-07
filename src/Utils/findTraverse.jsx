export default function findTraverse(data, match) {
    for (var prop in data) {
        if (!data.hasOwnProperty(prop)) continue;
        if (data[prop].toLowerCase().includes(match.toLowerCase())) {
            return true;
        }
        if (typeof data[prop] == "object" && findTraverse(data[prop], match))
            return true;
    }

    return false;
}
