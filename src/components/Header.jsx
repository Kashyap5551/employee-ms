import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className=' w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-800 text-white'>
                        <div>
                            <a className=' text-xl'>Employee Management Applet</a>
                        </div>

                    </nav>
                </header>
            </div>
        )
    }
}
