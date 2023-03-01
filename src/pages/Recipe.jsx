import Mainimg from '../components/Mainimg';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import Popular from '../components/Popular';

function Recipe() {
    return (
        <div className='body'>
            <div>
                <Mainimg />
            </div>
            <div className='grid'>
                <aside className='grid__sidebar'>
                 <Sidebar />
                </aside>
                <main className='grid__main'>
                    <Main />
                </main>
            </div>
            <div>
                <Popular />
            </div>
        </div>
    )
}

export default Recipe