function gradingStudents(grades) {
	let roundedGrades = [];
	grades.forEach((element) => {
		if (element < 38) {
			roundedGrades.push(element);
		} else {
			if (5 - (element % 5) < 3) {
				roundedGrades.push(element + (5 - (element % 5)));
			} else {
				roundedGrades.push(element);
			}
		}
	});
	return roundedGrades;
}
gradingStudents([73, 67, 38, 33]);
