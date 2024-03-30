function HL(){
    return(
        <div className="hl" id="hours&location">
            <h1> Hours & Location</h1>
            <div style={{display:"flex", paddingTop: 25, paddingBottom: 25, width: "90%", justifyContent: "center", margin: "auto"}}>
                <div style={{width: "50%", display: "flex", justifyContent: "center"}}>
                    <table>
                        <tbody>
                            <tr> 
                                <th style={{paddingRight: 15}}> Monday </th>
                                <td>8:00 AM - 7:00 PM</td>
                            </tr>
                            <tr> 
                                <th style={{paddingRight: 15}}> Tuesday </th>
                                <td>8:00 AM - 7:00 PM</td>
                            </tr>
                            <tr> 
                                <th style={{paddingRight: 15}}> Wednesday </th>
                                <td>8:00 AM - 7:00 PM</td>
                            </tr>
                            <tr> 
                                <th style={{paddingRight: 15}}> Thursday </th>
                                <td>8:00 AM - 7:00 PM</td>
                            </tr>
                            <tr> 
                                <th style={{paddingRight: 15}}> Friday </th>
                                <td>8:00 AM - 7:00 PM</td>
                            </tr>
                            <tr> 
                                <th style={{paddingRight: 15}}> Saturday </th>
                                <td>8:00 AM - 7:00 PM</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{width: "50%", display: "flex", justifyContent: "center"}}>
                    <div style={{textAlign: "left"}}>
                        <h2> J & A Grocery</h2>
                        <p> 702 S Chestnut St, Reed City, MI 49677 </p>
                        <a href="https://www.google.com/maps/place/J%26A+Grocery/@43.8693084,-85.5122108,17z/data=!4m6!3m5!1s0x881f25ef57da33ff:0xf4f2f978cc2049a7!8m2!3d43.8693046!4d-85.5096359!16s%2Fg%2F11j03bvcx2?entry=ttu" target="_blank"> 
                            Open in maps
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HL;