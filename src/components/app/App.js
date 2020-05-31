import React, {Component} from 'react';
import Filters from "../filters/Filters";
import CoursesList from '../courses-list/CoursesList';
import getCourses from "../../getCourses";
import filterCourses from "../utils/filterCourses";
import './App.css';

class App extends Component {
	state = {
		courses: [],
		filters: {
			subj: '',
			genre: '',
			grade: '',
			searchStr: '',
		},
		priceToggle: 'rub',
		coursesLoaded: false
	};

	componentDidMount() {
		(async () => {
			const courses = await getCourses();
			this.setState(() => {
				return {
					courses,
					coursesLoaded: true
				};
			});
		})();
	}

	onFilter = (filter) => {
		this.setState((state) => {
			return {
				filters: {
					...state.filters,
					...filter
				}
			};
		});
	};

	onPriceToggle = () => {
		this.setState((state) => {
			return {
				priceToggle: state.priceToggle === 'rub' ? 'bonus' : 'rub'
			};
		});
	};

	render() {
		const courses = filterCourses(this.state.courses, this.state.filters);
		const {coursesLoaded, priceToggle} = this.state;
		return (
			<div className="App">
				<h1>Витрина</h1>
				<Filters onFilter={this.onFilter} onPriceToggle={this.onPriceToggle}/>
				<CoursesList courses={courses} priceToggle={priceToggle} coursesLoaded={coursesLoaded}/>
			</div>
		);
	}
}

export default App;
