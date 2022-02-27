class MyHeader extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = `
        <div style="display: flex;
                    height: 70px;
                    background-color: #f5f5f5;
                    border-radius: 50px;">
            <div>
                <p style="font-family:Tw Cen MT;
                            font-size: 30px;">&nbsp;&nbsp;
                            Hanish <span style="color: red;">Kaushal</span></p> 
            </div>
            <div style="margin-top: 14px;
                        position: absolute;
                        right: 220px;">
                        <a href="Main.html" style="margin-right: 20px; font-size: 30px; font-family:Tw Cen MT; text-decoration: none;">Home</a>
                        <a href="about.html" style="margin-right: 20px; font-size: 30px; font-family:Tw Cen MT; text-decoration: none;">About</a>
                        <a href="expertise.html" style="margin-right: 20px; font-size: 30px; font-family:Tw Cen MT; text-decoration: none;">Expertise</a>
            </div>
            <div style="position: absolute; 
                        right: 15px;
                        top: 38px;">
                
                Hkaushal916@gmail.com<br/>
                8699567922<br/>
            </div>
        </div>

        `
    }
}
customElements.define('my-header',MyHeader)