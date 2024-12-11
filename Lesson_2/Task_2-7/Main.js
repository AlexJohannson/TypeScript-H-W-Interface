var clock = {
    time: 12
};
if (clock.time <= 15) {
    console.log('The first part of an hour');
}
else if (clock.time <= 30) {
    console.log('The second part of an hour');
}
else if (clock.time <= 45) {
    console.log('The third part of an hour');
}
else if (clock.time <= 59) {
    console.log('The fourth part of an hour');
}
else {
    console.log('One hour has only 60 minutes');
}
