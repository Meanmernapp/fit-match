export function formatDateToTimeZone(dateString, timeZone) {
    try {
        const date = new Date(dateString);
        if (isNaN(date)) throw new Error("Invalid date");

        const options = {
            timeZone: timeZone,
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true,
        };

        const formatter = new Intl.DateTimeFormat('en-US', options);
        const parts = formatter.formatToParts(date);

        const dateComponents = {};
        parts.forEach(({ type, value }) => {
            dateComponents[type] = value;
        });

        const day = dateComponents.day;
        const daySuffix = getDaySuffix(day);

        return `${dateComponents.month} ${day}${daySuffix} ${dateComponents.year}, ${dateComponents.hour}:${dateComponents.minute}:${dateComponents.second} ${dateComponents.dayPeriod}`;
    } catch (error) {
        return "Invalid date or time zone";
    }
}

function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
        return 'th';
    }
    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}

