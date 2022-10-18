function lockerFloors(locker) {
	let maxLocker = 5;
	let minLocker = 1;
	let increment = 5;
	let floor = 1;

	for (let i = 1; i <= locker; i++) {
		if (i % maxLocker == 0) {
			increment >= 7 ? (increment = 5) : increment++;
			minLocker = maxLocker + 1;
			maxLocker = maxLocker + increment;
			floor++;
		}
	}

	return console.log(`Lantai ${floor} locker yang tersedia ${minLocker} - ${maxLocker}`)
}

lockerFloors(1000)
