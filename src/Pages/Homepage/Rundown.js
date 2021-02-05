import React from 'react'
import "./Rundown.scss"
export const Rundown = () => {
    return (
        <div className="rundown-wrapper">
            <div className="rundown-container">
                <h1>Rundown Acara</h1>

                <table>
                    <tr>
                        <th>
                            Mata Acara
                        </th>
                        <th>
                            Waktu
                        </th>
                    </tr>
                    <tr>
                        <td>
                            Talkshow Webinar
                        </td>
                        <td>
                            09.00 WIB - 11.30 WIB
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Pembukaan Platform Booth Fakultas dan Platform Jelajah Kampus Virtual
                        </td>
                        <td>
                            10.00 WIB
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Live Interaction HMJ
                        </td>
                        <td>
                            10.00 WIB - 16.00 WIB
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Live Jelajah Kampus Via Zoom
                        </td>
                        <td>
                            13.00 WIB - 15.30 WIB
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Virtual Charity Concert
                        </td>
                        <td>
                            19.00 WIB - 21.30 WIB
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}