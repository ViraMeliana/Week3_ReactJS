// import React, { Component } from 'react';
import React, { Component } from 'react';
import Image from './Image'; 
class List extends Component {
    render() {
        return (
            <div>
                <ol>
                    <li>
                        Satu
                        <Image linkGambar='https://placekitten.com/200/140' />
                    </li>
                    <li>
                        Dua
                        <Image linkGambar='https://placekitten.com/408/287' />
                    </li>
                    <li>
                        Tiga
                        <Image linkGambar='https://placekitten.com/200/139'/>
                    </li>
                    <li>
                        Empat
                        <Image linkGambar='https://placekitten.com/200/140' />
                    </li>
                </ol>
            </div>
        );
    }
} export default List;