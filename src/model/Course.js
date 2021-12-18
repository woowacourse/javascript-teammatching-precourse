import {
	getCourseInformation,
	setCourseInformation,
} from '../storage/index.js';

const Course = {
	course: undefined,
	listeners: {
		crews: [],
	},
	crews: [],

	init(key) {
		const { crews } = getCourseInformation(key);

		this.course = key;
		this.crews = crews;
		this.notify('crews');
	},

	register(key, listener, context) {
		this.listeners[key].push({ listener, context });
	},

	notify(key) {
		this.listeners[key].forEach(({ listener, context }) =>
			listener(this[key], context)
		);
	},

	getCourse() {
		return this.course;
	},

	setCourse(newCourse) {
		this.course = newCourse;
	},

	getCrews() {
		return this.crews;
	},

	setCrews(newCrews) {
		this.crews = newCrews;
		this.notify('crews');
		setCourseInformation(this.course, {
			...getCourseInformation(this.course),
			crews: newCrews,
		});
	},

	addCrew(crewName) {
		this.setCrews([...this.crews, crewName]);
	},

	removeCrew(crewName) {
		this.setCrews(this.crews.filter((crew) => crew !== crewName));
	},
};

export default Course;
