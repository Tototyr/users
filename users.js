const expectedUsers = 1000;
const usersByDay = [817, 1370, 752, 1247, 681, 1120, 915, 1281, 875, 1341, 757, 610, 812, 1170, 769, 1261, 845, 1289, 515, 1247, 845, 1311, 741, 1239, 812, 638, 877, 1242, 1159, 1372];

// Summarize attendance
let totalUsers = 0;
const minUsers = expectedUsers - 100;
<<<<<<< Updated upstream
for (const i = 0; i <= usersByDay.length - 1; i++) {
  totalUsers += usersByDay[i];
  if (usersByDay[i] < minUsers) {
    console.log (usersByDay[i]) // need to remove
    }
=======

for (let i = 0; i <= usersByDay.length - 1; i++) {
	totalUsers += usersByDay[i];

	if (usersByDay[i] < minUsers) {
		console.log(usersByDay[i]); // need to remove
	}
>>>>>>> Stashed changes
}



// Calculate average attendance посещаемости
const averageUsers = totalUsers / usersByDay.length;
<<<<<<< Updated upstream
console.log('Средняя посещаемость: ' + averageUsers);
=======
console.log(`Средняя посещаемость: ${averageUsers}`);
>>>>>>> Stashed changes

if (averageUsers > expectedUsers) {
  console.log('Посещаемость великолепна. Продолжай в том же духе!');
} else {
  console.log('Посещаемость так себе. Нужно поднапрячься!');
}
