import React from 'react'
import { Fragment } from 'react';
import { Tabs } from "antd";
import { NavLink } from "react-router-dom";
import {
  IssuesCloseOutlined,
  UserOutlined,
} from "@ant-design/icons";


import "../Checkout/Checkout.css"
import _ from "lodash";
const { TabPane } = Tabs;
export default function (props) {
  const operations = (
    <Fragment>
      <button
        className="btn  px-3 "
        type="submit" style={{ display: 'flex', justifyContent: 'center' }}
      >
        <NavLink style={{ color: 'white' }} to="/profile">
          <UserOutlined style={{ width: '32px', height: '32px', lineHeight: '30px', borderRadius: '20px', backgroundColor: 'pink' }} /> hello!
        </NavLink>
      </button>
      <button onClick={() => {
        window.location.reload();
      }} className="text-success">Đăng Xuất</button>
    </Fragment>
  );

  return (
    <div className="check  style={{color:'white'}}">
      <Tabs
        tabBarExtraContent={operations}
        className="px-5"
        defaultActiveKey="1"
      >
        <TabPane
          tab={
            <NavLink to="/home">
              <img style={{ width: "8%" }} src="../img/homepage.png"></img>
            </NavLink>
          }
          key="3"
        ></TabPane>
        <TabPane
          tab="01.Chọn Ghế và Thanh Toán"
          style={{ color: "white" }}
          key="1"
        >
          <Checkout  {...props} />
        </TabPane>
        <TabPane tab="02.Kết Quả Đặt Vé" key="2" style={{ color: "white" }}>

        </TabPane>
      </Tabs>
    </div>
  );
}


function Checkout(props) {




  return (
    <div
      style={{
        backgroundColor: "#0000000",
        minHeight: "full",
        marginTop: "-15px",
      }}
    >
      <div className="container">
        <div className="row">
          {/* render ghe */}
          <div className="col-8" style={{
              right:"10%",
            }}>
            {/* màn hình  */}
            <div className="screen mt-3">
              <img src="../img/screen.png" />
            </div>

            {/* render số ghế */}
            <div
              className="phongghe"
              style={{ marginTop: "-20px", marginLeft: "25px" }}
            >
              <div>
                <div>
                  <button className="ghe     ">01</button>
                  <button className="ghe     ">02</button>
                  <button className="ghe     ">03</button>
                  <button className="ghe     ">04</button>
                  <button className="ghe     ">05</button>
                  <button className="ghe     ">06</button>
                  <button className="ghe     ">07</button>
                  <button className="ghe     ">08</button>
                  <button className="ghe     ">09</button>
                  <button className="ghe     ">10</button>
                  <button className="ghe     ">11</button>
                  <button className="ghe     ">12</button>
                  <button className="ghe     ">13</button>
                  <button className="ghe     ">14</button>
                  <button className="ghe     ">15</button>
                  <button className="ghe     ">16</button><br />
                  <button className="ghe     ">17</button>
                  <button className="ghe     ">18</button>
                  <button className="ghe     ">19</button>
                  <button className="ghe     ">20</button>
                  <button className="ghe     ">21</button>
                  <button className="ghe     ">22</button>
                  <button className="ghe     ">23</button>
                  <button className="ghe     ">24</button>
                  <button className="ghe     ">25</button>
                  <button className="ghe     ">26</button>
                  <button className="ghe     ">27</button>
                  <button className="ghe     ">28</button>
                  <button className="ghe   ghedangdat  ">29</button>
                  <button className="ghe     ">30</button>
                  <button className="ghe     ">31</button>
                  <button className="ghe     ">32</button><br />
                  <button className="ghe     ">33</button>
                  <button className="ghe     ">34</button>
                  <button className="ghe gheVip    ">35</button>
                  <button className="ghe gheVip    ">36</button>
                  <button className="ghe gheVip    ">37</button>
                  <button className="ghe gheVip    ">38</button>
                  <button className="ghe gheVip    ">39</button>
                  <button className="ghe gheVip    ">40</button>
                  <button className="ghe gheVip    ">41</button>
                  <button className="ghe gheVip    ">42</button>
                  <button className="ghe gheVip    ">43</button>
                  <button className="ghe gheVip    ">44</button>
                  <button className="ghe gheVip    ">45</button>
                  <button className="ghe gheVip    ">46</button>
                  <button className="ghe   ghedangdat  ">47</button>
                  <button className="ghe     ">48</button><br />
                  <button className="ghe     ">49</button>
                  <button className="ghe     ">50</button>
                  <button className="ghe gheVip    ">51</button>
                  <button className="ghe gheVip    ">52</button>
                  <button className="ghe gheVip    ">53</button>
                  <button className="ghe gheVip    ">54</button>
                  <button className="ghe gheVip    ">55</button>
                  <button className="ghe gheVip    ">56</button>
                  <button className="ghe gheVip    ">57</button>
                  <button className="ghe gheVip    ">58</button>
                  <button className="ghe gheVip    ">59</button>
                  <button className="ghe gheVip    ">60</button>
                  <button className="ghe gheVip    ">61</button>
                  <button className="ghe gheVip    ">62</button>
                  <button className="ghe     ">63</button>
                  <button className="ghe     ">64</button><br />
                  <button className="ghe     ">65</button>
                  <button className="ghe     ">66</button>
                  <button className="ghe gheVip    ">67</button>
                  <button className="ghe gheVip    ">68</button>
                  <button className="ghe gheVip    ">69</button>
                  <button className="ghe gheVip    ">70</button>
                  <button className="ghe gheVip    ">71</button>
                  <button className="ghe gheVip    ">72</button>
                  <button className="ghe gheVip    ">73</button>
                  <button className="ghe gheVip    ">74</button>
                  <button className="ghe gheVip    ">75</button>
                  <button className="ghe gheVip    ">76</button>
                  <button className="ghe gheVip    ">77</button>
                  <button className="ghe gheVip    ">78</button>
                  <button className="ghe     ">79</button>
                  <button className="ghe     ">80</button><br />
                  <button className="ghe     ">81</button>
                  <button className="ghe     ">82</button>
                  <button className="ghe gheVip    ">83</button>
                  <button className="ghe gheVip    ">84</button>
                  <button className="ghe gheVip    ">85</button>
                  <button className="ghe gheVip    ">86</button>
                  <button className="ghe gheVip    ">87</button>
                  <button className="ghe gheVip    ">88</button>
                  <button className="ghe gheVip    ">89</button>
                  <button className="ghe gheVip    ">90</button>
                  <button className="ghe gheVip    ">91</button>
                  <button className="ghe gheVip    ">92</button>
                  <button className="ghe gheVip    ">93</button>
                  <button className="ghe gheVip    ">94</button>
                  <button className="ghe     ">95</button>
                  <button className="ghe     ">96</button><br />
                  <button className="ghe     ">97</button>
                  <button className="ghe     ">98</button>
                  <button className="ghe gheVip    ">99</button>
                  <button className="ghe gheVip    ">100</button>
                  <button className="ghe gheVip    ">101</button>
                  <button className="ghe gheVip    ">102</button>
                  <button className="ghe gheVip    ">103</button>
                  <button className="ghe gheVip    ">104</button>
                  <button className="ghe gheVip    ">105</button>
                  <button className="ghe gheVip    ">106</button>
                  <button className="ghe gheVip    ">107</button>
                  <button className="ghe gheVip    ">108</button>
                  <button className="ghe gheVip    ">109</button>
                  <button className="ghe gheVip    ">110</button>
                  <button className="ghe     ">111</button>
                  <button className="ghe     ">112</button>
                  <br /><button className="ghe     ">113</button>
                  <button className="ghe     ">114</button>
                  <button className="ghe gheVip    ">115</button>
                  <button className="ghe gheVip    ">116</button>
                  <button className="ghe gheVip    ">117</button>
                  <button className="ghe gheVip    ">118</button>
                  <button className="ghe gheVip    ">119</button>
                  <button className="ghe gheVip    ">120</button>
                  <button className="ghe gheVip    ">121</button>
                  <button className="ghe gheVip    ">122</button>
                  <button className="ghe gheVip    ">123</button>
                  <button className="ghe gheVip    ">124</button>
                  <button className="ghe gheVip    ">125</button>
                  <button className="ghe gheVip    ">126</button>
                  <button className="ghe     ">127</button>
                  <button className="ghe     ">128</button><br />
                  <button className="ghe     ">129</button>
                  <button className="ghe     ">130</button>
                  <button className="ghe     ">131</button>
                  <button className="ghe     ">132</button>
                  <button className="ghe     ">133</button>
                  <button className="ghe     ">134</button>
                  <button className="ghe     ">135</button>
                  <button className="ghe     ">136</button>
                  <button className="ghe     ">137</button>
                  <button className="ghe     ">138</button>
                  <button className="ghe     ">139</button>
                  <button className="ghe     ">140</button>
                  <button className="ghe     ">141</button>
                  <button className="ghe     ">142</button>
                  <button className="ghe     ">143</button>
                  <button className="ghe     ">144</button><br />
                  <button className="ghe     ">145</button>
                  <button className="ghe     ">146</button>
                  <button className="ghe     ">147</button>
                  <button className="ghe     ">148</button>
                  <button className="ghe     ">149</button>
                  <button className="ghe     ">150</button>
                  <button className="ghe     ">151</button>
                  <button className="ghe     ">152</button>
                  <button className="ghe     ">153</button>
                  <button className="ghe     ">154</button>
                  <button className="ghe     ">155</button>
                  <button className="ghe     ">156</button>
                  <button className="ghe     ">157</button>
                  <button className="ghe     ">158</button>
                  <button className="ghe     ">159</button>
                  <button className="ghe     ">160</button><br />
                </div>

              </div>
            </div>
            <table className="table text-white mt-3">
              <thead>
                <tr className="text-white text-center">
                  <th scope="col">Ghế Vip</th>
                  <th scope="col">Ghế chưa chọn</th>
                  <th scope="col">Ghế đã được đặt</th>
                  <th scope="col">Ghế bạn đã đặt</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <th>
                    <button type='button' className="btn gheVip"></button>
                  </th>
                  <td>
                    {" "}
                    <button className="btn ghe"></button>
                  </td>
                  <td>
                    {" "}
                    <button className="btn ghedadat">
                      <IssuesCloseOutlined
                        style={{
                          position: "absolute",
                          bottom: "43px",
                          marginLeft: "-8px",
                          color: "ghostwhite",
                        }}
                      ></IssuesCloseOutlined>
                    </button>
                  </td>
                  <td style={{ marginLeft: 60 }}>
                    <button className="btn ghedadcdat ">
                      <UserOutlined
                        style={{
                          position: "absolute",
                          bottom: "43px",
                          marginLeft: "-8px",
                          color: "#b3c221",
                        }}
                      />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* đặt vé tính tiền */}
          <div
            style={{
              right:"10%",
              position: "absolute",
              top: "7px",
              width: "26%",
            }}
            className="col-4"
          >
            <h3
              className="text-success text-center"
              style={{ fontSize: "20px" }}
            >

            </h3>
            <hr />
            {/*Dấu ?: toán tử optainal chaining */}
            <h3

              style={{ fontSize: "20px", color: "white" }}
            >
              Tên Phim:
            </h3>
            <p style={{ fontSize: "15px", fontWeight: 500 }}>
              Địa điểm:
            </p>
            <p style={{ fontSize: "15px", fontWeight: 500 }}>
              {" "}
              Ngày Chiếu:
            </p>
            <hr />
            <div
              className="d-flex"
              style={{
                justifyContent: "space-between",
                overflowY: "scroll",
                height: "200px",
              }}
            >
              <table className="table table-bordered">
                <thead>
                  <tr className="text-white">
                    <th scope="col">Ghế</th>
                    <th scope="col">Giá</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  <tr style={{ overflowY: "scroll", height: "30%" }}>
                    <td style={{ color: "red", fontSize: "18px" }}></td>
                    <td style={{ color: "green", fontWeight: 600 }}>

                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr />
            <div className="my-3" style={{ fontSize: "18px", fontWeight: 600 }}>
              <i>Email: </i>
            </div>
            <hr />
            <div className="my-3" style={{ fontSize: "18px", fontWeight: 600 }}>
              <i>Phone: </i>

            </div>
            <hr />
            <div
              className="px-4"
              style={{ marginTop: "60px", maxheight: "full" }}
            >
              <button

                className="btn btn-success "
                style={{
                  width: "100%",
                  fontSize: "18px",
                  fontWeight: 600,
                  backgroundImage: "linear-gradient(223deg,#b4ec51,#429321",
                }}
              >
                ĐẶT VÉ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


