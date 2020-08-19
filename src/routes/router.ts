import Admins from '../views/admins/admins';
import Students from '../views/students/students';
import HomePage from '../views/HomePage';
import HighlightsPage from '../views/HighlightsPage';
import BLogPage from '../views/BlogPage';
import Contacts from '../views/contact';
import Courses from '../views/courses';
import Headers from '../views/Header/headerPage';
import InfoWrapper from '../views/Info/InfoWrapper';

var ThemeRoutes = [
	{
		path: '/admins',
		name: 'Admins',
		component: Admins
	},
	{
		path: '/students',
		name: 'Students',
		component: Students
	},
	{
		path: '/home',
		name: 'home',
		component: HomePage
	},
	{
		path: '/highlights',
		name: 'highlights',
		component: HighlightsPage
	},
	{
		path: '/blog',
		name: 'blog',
		component: BLogPage
	},
	{
		path: '/contacts',
		name: 'contacts',
		component: Contacts
	},
	{
		path: '/courses',
		name: 'courses',
		component: Courses
	},
	{
		path: '/header',
		name: 'header',
		component: Headers
	},
	{
		path: '/info',
		name: 'info',
		component: InfoWrapper
	},
];
export default ThemeRoutes;
