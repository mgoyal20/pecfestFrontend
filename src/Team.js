import React, {Component} from 'react';
import {Motion, spring} from 'react-motion';
import Loader from './Loader';
// import SvgCircle from './SvgCircle';
import './Team.css';
import './Team.css';

export default class Team extends Component {

  componentDidMount() {

    var em = document.getElementsByClassName("email");
    var phone = document.getElementsByClassName("phone");
    for (var i of em) {
      var txt = i.innerHTML;
      i.innerHTML = "<a href='mailto:" + txt + "' title='" + txt + "'>" + txt + "</a>";
      // console.log(i.innerHTML);
    }
    for (var i of phone) {
      var txt = i.innerHTML;
      i.innerHTML = "<a href='tel:+91" + txt + "' title='+91-" + txt + "'>+91-" + txt + "</a>";
    }

    this.restore = document.body.style.overflow;
    document.body.style.overflow = 'auto';

  }

  componentWillUnmount() {
    document.body.style.overflow = this.restore;

  }

  render() {
    return (
      <div className="container-fluid" id="parent_">
        <div className="Team-header">
          <h1>Team</h1>
        </div>
        <div className="row heading">
          <div className="col">
            <div className="designation">Convener</div>
            <div className="Team-card" style={{backgroundImage: 'url(' + require('./team/Akhilesh.jpg') + ')'}}>
              <div className="card_inner">
                <div className="pad"></div>
                <div className="card_content_top"></div>
                <div className="card_content_bottom">
                  <div className="name">Akhilesh Sharma</div>
                  <div className="email">akhilesh@pecfest.in</div>
                  <div className="phone">9888696867</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="designation">Co-Convener</div>
            <div className="Team-card" style={{backgroundImage: 'url(' + require('./team/Harsh.jpg') + ')'}}>
              <div className="card_inner">
                <div className="pad"></div>
                <div className="card_content_top"></div>
                <div className="card_content_bottom">
                  <div className="name">Harsh Sharma</div>
                  <div className="email">harsh@pecfest.in</div>
                  <div className="phone">9878235871</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row heading">
          <div className="col">
            <div className="designation">Secretaries</div>
            <div className="row">
              <div className="Team-card" style={{backgroundImage: 'url(' + require('./team/MayankGoyal.jpg') + ')'}}>
                <div className="card_inner">
                  <div className="pad"></div>
                  <div className="card_content_top"></div>
                  <div className="card_content_bottom">
                    <div className="name">Mayank Goyal</div>
                    <div className="email">mayank@pecfest.in</div>
                    <div className="phone">9465242818</div>
                  </div>
                </div>
              </div>
              <div className="Team-card" style={{backgroundImage: 'url(' + require('./team/Shivam.jpg') + ')'}}>
                <div className="card_inner">
                  <div className="pad"></div>
                  <div className="card_content_top"></div>
                  <div className="card_content_bottom">
                    <div className="name">Shivam Thakur</div>
                    <div className="email">shivam.pecfest@gmail.com</div>
                    <div className="phone">9471091084</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="Team-card" style={{backgroundImage: 'url(' + require('./team/Shubam.jpg') + ')'}}>
                <div className="card_inner">
                  <div className="pad"></div>
                  <div className="card_content_top"></div>
                  <div className="card_content_bottom">
                    <div className="name">Shubham Garg</div>
                    <div className="email">shubham@pecfest.in</div>
                    <div className="phone">9501157818</div>
                  </div>
                </div>
              </div>
              <div className="Team-card" style={{backgroundImage: 'url(' + require('./team/Isha.jpg') + ')'}}>
                <div className="card_inner">
                  <div className="pad"></div>
                  <div className="card_content_top"></div>
                  <div className="card_content_bottom">
                    <div className="name">Isha Singla</div>
                    <div className="email">singlaisha96@gmail.com</div>
                    <div className="phone">8288997585</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row heading">
          <div className="col">
            <div className="designation">Marketing (Branding and Sponsorship)</div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="Team-card" style={{backgroundImage: 'url(' + require('./team/Aseem.jpg') + ')'}}>
              <div className="card_inner">
                <div className="pad"></div>
                <div className="card_content_top"></div>
                <div className="card_content_bottom">
                  <div className="name">Aseem Baveja</div>
                  <div className="email">aseem@pecfest.in</div>
                  <div className="phone">9988081481</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="Team-card" style={{backgroundImage: 'url(' + require('./team/Ananya.jpg') + ')'}}>
              <div className="card_inner">
                <div className="pad"></div>
                <div className="card_content_top"></div>
                <div className="card_content_bottom">
                  <div className="name">Ananya Singh Chaudhary</div>
                  <div className="email">ananya@pecfest.in</div>
                  <div className="phone">8558819215</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row heading">
          <div className="col">
            <div className="designation">Infrastructure</div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="Team-card" style={{backgroundImage: 'url(' + require('./team/Devansh.jpg') + ')'}}>
              <div className="card_inner">
                <div className="pad"></div>
                <div className="card_content_top"></div>
                <div className="card_content_bottom">
                  <div className="name">Devansh Kandpal</div>
                  <div className="email">devansh.kandpal@gmail.com</div>
                  <div className="phone">9592029283</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="Team-card" style={{backgroundImage: 'url(' + require('./team/Shubanshu.jpg') + ')'}}>
              <div className="card_inner">
                <div className="pad"></div>
                <div className="card_content_top"></div>
                <div className="card_content_bottom">
                  <div className="name">Shubhanshu Sharma</div>
                  <div className="email">shubhanshu.pec@gmail.com</div>
                  <div className="phone">9780994223</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row heading">
          <div className="col">
            <div className="designation">Event Coordination (Technical)</div>
          </div>
        </div>
        <div className="row">
          <div className="Team-card" style={{backgroundImage: 'url(' + require('./team/Vaibhav2.jpg') + ')'}}>
            <div className="card_inner">
              <div className="pad"></div>
              <div className="card_content_top"></div>
              <div className="card_content_bottom">
                <div className="name">Vaibhav Dwivedi</div>
                  <div className="email">vaibhav0597@gmail.com</div>
                  <div className="phone">7888470988</div>
              </div>
            </div>
          </div>
          <div className="Team-card" style={{backgroundImage: 'url(' + require('./team/Shyam.jpg') + ')'}}>
            <div className="card_inner">
              <div className="pad"></div>
              <div className="card_content_top"></div>
              <div className="card_content_bottom">
                <div className="name">Shyam Pandya</div>
                <div className="email">shyam@pecfest.in</div>
                <div className="phone">9592029037</div>
              </div>
            </div>
          </div>
        </div>

        <div className="row heading">
          <div className="col">
            <div className="designation">Event Coordination (Cultural)</div>
          </div>
        </div>
        <div className="row">
          <div className="Team-card" style={{backgroundImage: 'url(' + require('./team/Shiman.jpg') + ')'}}>
            <div className="card_inner">
              <div className="pad"></div>
              <div className="card_content_top"></div>
              <div className="card_content_bottom">
                <div className="name">Shiman Vashisth</div>
                <div className="email">shiman@pecfest.in</div>
                <div className="phone">9915749135</div>
              </div>
            </div>
          </div>
          <div className="Team-card" style={{backgroundImage: 'url(' + require('./team/Raghav.jpg') + ')'}}>
            <div className="card_inner">
              <div className="pad"></div>
              <div className="card_content_top"></div>
              <div className="card_content_bottom">
                <div className="name">Raghav Arora</div>
                <div className="email">raghavarora.beaero15@pec.edu.in</div>
                <div className="phone">8968222377</div>
              </div>
            </div>
          </div>
        </div>

        <div className="row heading">
          <div className="col">
            <div className="designation">Security and Discipline</div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="Team-card" style={{backgroundImage: 'url(' + require('./team/Himansh.jpg') + ')'}}>
              <div className="card_inner">
                <div className="pad"></div>
                <div className="card_content_top"></div>
                <div className="card_content_bottom">
                  <div className="name">Himanish Kumar</div>
                  <div className="email">himanishkumar82@gmail.com</div>
                  <div className="phone">9815560072</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="Team-card" style={{backgroundImage: 'url(' + require('./team/Gurjot.jpg') + ')'}}>
              <div className="card_inner">
                <div className="pad"></div>
                <div className="card_content_top"></div>
                <div className="card_content_bottom">
                  <div className="name">Gurjot Singh</div>
                    <div className="email">gurjot.pecfest@gmail.com</div>
                    <div className="phone">9915644787</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row heading">
          <div className="col">
            <div className="designation">Alumni &amp; Industry Relations</div>
            <div className="Team-card" style={{backgroundImage: 'url(' + require('./team/Snigdha.jpg') + ')'}}>
              <div className="card_inner">
                <div className="pad"></div>
                <div className="card_content_top"></div>
                <div className="card_content_bottom">
                  <div className="name">Snigdha Singh</div>
                  <div className="email">snigdha@pecfest.in</div>
                  <div className="phone">8968675396</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="designation">Printing and Stationary</div>
            <div className="Team-card" style={{backgroundImage: 'url(' + require('./team/Gautam.jpg') + ')'}}>
              <div className="card_inner">
                <div className="pad"></div>
                <div className="card_content_top"></div>
                <div className="card_content_bottom">
                  <div className="name">Gautam Sharma</div>
                  <div className="email">printing@pecfest.in</div>
                  <div className="phone">9888359047</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row heading">
          <div className="col">
            <div className="designation">Mega Shows</div>
            <div className="Team-card" style={{backgroundImage: 'url(' + require('./team/Ketan.jpg') + ')'}}>
              <div className="card_inner">
                <div className="pad"></div>
                <div className="card_content_top"></div>
                <div className="card_content_bottom">
                  <div className="name">Ketan Sud</div>
                  <div className="email">ketan@pecfest.in</div>
                  <div className="phone">9876970913</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="designation">Finance</div>
            <div className="Team-card" style={{backgroundImage: 'url(' + require('./team/Gobind.jpg') + ')'}}>
              <div className="card_inner">
                <div className="pad"></div>
                <div className="card_content_top"></div>
                <div className="card_content_bottom">
                  <div className="name">Gobind Dhamija</div>
                  <div className="email">Gobinddhamija19@gmail.com</div>
                  <div className="phone">8054951996</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row heading">
          <div className="col">
            <div className="designation">Logistics</div>
            <div className="Team-card" style={{backgroundImage: 'url(' + require('./team/Akanksha.jpg') + ')'}}>
              <div className="card_inner">
                <div className="pad"></div>
                <div className="card_content_top"></div>
                <div className="card_content_bottom">
                  <div className="name">Aakanksha</div>
                  <div className="email">aakanksha.kh.pec@gmail.com</div>
                  <div className="phone">9501033030</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="designation">Hospitality</div>
            <div className="Team-card" style={{backgroundImage: 'url(' + require('./team/Pratik.jpg') + ')'}}>
              <div className="card_inner">
                <div className="pad"></div>
                <div className="card_content_top"></div>
                <div className="card_content_bottom">
                  <div className="name">Pratik Sinha</div>
                  <div className="email">pratikpecfest@gmail.com</div>
                  <div className="phone">8528858461</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row heading">
          <div className="col">
            <div className="designation">Public Relations and Media</div>
            <div className="Team-card" style={{backgroundImage: 'url(' + require('./team/Sanpreet.jpg') + ')'}}>
              <div className="card_inner">
                <div className="pad"></div>
                <div className="card_content_top"></div>
                <div className="card_content_bottom">
                  <div className="name">Sanpreet</div>
                    <div className="email">sanpreetsingh34@gmail.com</div>
                    <div className="phone">9814030120</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="designation">Publicity and Branding</div>
            <div className="Team-card" style={{backgroundImage: 'url(' + require('./team/Vaibhav.jpg') + ')'}}>
              <div className="card_inner">
                <div className="pad"></div>
                <div className="card_content_top"></div>
                <div className="card_content_bottom">
                  <div className="name">Vaibhav Sharma</div>
                    <div className="email">vaibhav@pecfest.in</div>
                    <div className="phone">7888612705</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row heading">
          <div className="col">
            <div className="designation">Creative</div>
            <div className="Team-card" style={{backgroundImage: 'url(' + require('./team/MayankKaura.jpg') + ')'}}>
              <div className="card_inner">
                <div className="pad"></div>
                <div className="card_content_top"></div>
                <div className="card_content_bottom">
                  <div className="name">Mayank Kaura</div>
                  <div className="email">kaura.mayank1997@gmail.com</div>
                  <div className="phone">9876139090</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}