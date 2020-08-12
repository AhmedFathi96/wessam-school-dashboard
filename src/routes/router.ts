import Admins from '../views/admins/admins';
import Students from '../views/students/students';
import HomePage from '../views/HomePage';
import HighlightsPage from '../views/HighlightsPage';
import BLogPage from '../views/BlogPage';
import Contacts from '../views/contact';

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
];
export default ThemeRoutes;
