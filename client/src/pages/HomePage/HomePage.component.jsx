import React from 'react';
import LineChart from '../../components/CryptoChart/LineChart.component';

import { ReactComponent as Icon1} from '../../svg/001.svg';
import { ReactComponent as Icon2} from '../../svg/002.svg';
import { ReactComponent as Icon3} from '../../svg/003.svg';
import { ReactComponent as Icon4} from '../../svg/004.svg';

const HomePage = () => {
    
    let times = new Array(24).fill('')

    let values = [0, 1, 2, 3, 4, 5, 5, 4, 6, 8, 9, 10, 15, 20, 15, 30, 35, 36, 40, 50, 60, 70, 80, 100]
    
    return (
    <div className='homepage'>

        <div className='homepage__mainContent'>
            <div className='homepage__mainContent--text'>
                <div className='homepage__mainContent--header'>
                    <h1> Cryptofy </h1>
                    <div className='homepage__mainContent--header--imageWrapper'>
                        <img alt='ether' src='../images/ether.png' />
                    </div>
                </div>

                <div className='homepage__mainContent--boxes'>
                    <div className='homepage__mainContent--box'>
                        <div className='homepage__mainContent--iconWrapper'>
                            <Icon1 className='homepage__mainContent--icon' />
                        </div>
                        <h2 className='homepage__mainContent--description'> Live tracking current cryptocurrency courses </h2>
                    </div>
                    <div className='homepage__mainContent--box'>
                        <div className='homepage__mainContent--iconWrapper'>
                            <Icon2 className='homepage__mainContent--icon' />
                        </div>
                        <h2 className='homepage__mainContent--description'> Support for over 100 tokens across multiple blockchains </h2>
                    </div>
                    <div className='homepage__mainContent--box'>
                        <div className='homepage__mainContent--iconWrapper'>
                            <Icon3 className='homepage__mainContent--icon' />
                        </div>
                        <h2 className='homepage__mainContent--description'> data aggregation for saved spot and futures market trades </h2>
                    </div>
                    <div className='homepage__mainContent--box'>
                        <div className='homepage__mainContent--iconWrapper'>
                            <Icon4 className='homepage__mainContent--icon' />
                        </div>
                        <h2 className='homepage__mainContent--description'> Calculates current profit in pairs to usd or bitcoin </h2>
                    </div>

                </div>

                <button className='homepage__mainContent--button' > Sign up </button>

            </div>
            <div className='homepage__mainContent--chartContainer'>
                <div className='homepage__mainContent--chart'>
                    <div className='homepage__mainContent--chartWrapper'>
                        <LineChart tickMark='%' height={180} times={times} values={values} chartColor='#32ff7e'  />
                    </div>
                </div>
            </div>
        </div>
        
        {
            // <div>Icons made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> 
        }
    </div>
)};

export default HomePage;