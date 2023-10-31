import React from "react";
import "../Navbar/navbar.css";
import { Button, Dialog, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { white } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Dailogs from "./Dailogs";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [togle, setTogale] = useState(false);
  const handledialog = () => {
    setOpen(true);
  };
  const toggleitem = () => {
    setTogale(true);
  };
  const handclose = () => {
    setTogale(false);
  };

  return (
    <div className="main-wrapper">
      <div className="main">
        <div className="navbar-right">
          <div className="menubar">
            {!togle ? (
              <MenuIcon
                sx={(theme) => ({
                  [theme.breakpoints.up("md")]: {
                    display: "none",
                  },

                  width: "1em",
                  height: "1em",
                })}
                onClick={toggleitem}
              />
            ) : (
              <CloseIcon
                sx={(theme) => ({
                  [theme.breakpoints.up("md")]: {
                    display: "none",
                  },

                  width: "45px",
                  height: "45px",
                })}
                onClick={handclose}
              />
            )}
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWUAAABLCAYAAACoVJZJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAzdEVYdENvbW1lbnQAeHI6ZDpEQUZjcTdSdlhFZzozLGo6NDg0MjE1OTYwMTQsdDoyMzAzMDkwM9hT5gUAAAT9aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAABodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nPgogICAgICAgIDxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogICAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgICAgICAgeG1sbnM6ZGM9J2h0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvJz4KICAgICAgICA8ZGM6dGl0bGU+CiAgICAgICAgPHJkZjpBbHQ+CiAgICAgICAgPHJkZjpsaSB4bWw6bGFuZz0neC1kZWZhdWx0Jz5ab21pIEZpbmFuY2UgLSAxPC9yZGY6bGk+CiAgICAgICAgPC9yZGY6QWx0PgogICAgICAgIDwvZGM6dGl0bGU+CiAgICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CgogICAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgICAgICAgeG1sbnM6QXR0cmliPSdodHRwOi8vbnMuYXR0cmlidXRpb24uY29tL2Fkcy8xLjAvJz4KICAgICAgICA8QXR0cmliOkFkcz4KICAgICAgICA8cmRmOlNlcT4KICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz4KICAgICAgICA8QXR0cmliOkNyZWF0ZWQ+MjAyMy0wMy0wOTwvQXR0cmliOkNyZWF0ZWQ+CiAgICAgICAgPEF0dHJpYjpFeHRJZD41MDYzMDYxYi1iNWM0LTRmNzctYmY0Zi0xNjNhMWM2Zjk3YjI8L0F0dHJpYjpFeHRJZD4KICAgICAgICA8QXR0cmliOkZiSWQ+NTI1MjY1OTE0MTc5NTgwPC9BdHRyaWI6RmJJZD4KICAgICAgICA8QXR0cmliOlRvdWNoVHlwZT4yPC9BdHRyaWI6VG91Y2hUeXBlPgogICAgICAgIDwvcmRmOmxpPgogICAgICAgIDwvcmRmOlNlcT4KICAgICAgICA8L0F0dHJpYjpBZHM+CiAgICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CgogICAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgICAgICAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICAgICAgICA8cGRmOkF1dGhvcj5SZXRybyBTZXJ2aWNlczwvcGRmOkF1dGhvcj4KICAgICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KCiAgICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICAgICAgICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmE8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICAgICA8L3JkZjpSREY+CiAgICAgICAgPC94OnhtcG1ldGE+3WmONAAAACF0RVh0Q3JlYXRpb24gVGltZQAyMDIzOjAzOjA5IDEzOjQ1OjEzsgb1eQAAEA1JREFUeF7tnQmQXEUdxrObJSGBGI6YcAkEAhKuqMihURE5RAkFKoIIAiKXgJTEIEE5FFKAclmIFGdIijKKhUARIXJ6EDBAKE24BAJJgIRwSYAQAmQ2/r7enqmZ2c3s7Ey/2aO+X9VX/X/d73W/9/bN//X266OfMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGmMqsWrWqCQ1G68QoY4zpNTTHsE+AI16DYGxra+tk7FPaYo0xxjQc1ZBxxvugh7D/RDgqJhljjGk0OOE90AL0ANoZx9yn/gswxpheAQ54IDogl8stJJyF9sAh94/JxhhjGgXOd010II54DvoP9l6oJSYbY4xpFDjfZhzxF9FM9CIaR5w+9BljTK+l17a74oA/TjAe7YS9mHCB4tAApRtjTG+kKYa9Chyv+iJ/Ac1oampSE8YKwudJehfdgX0VeivsXISOI1B78wDsEYRboFeam5ufIjTGmG6nVzpl0draujHBL9F2aBV6Fa2P5GxPwdHeRRjAAbegdTG3Qp9FuyE5ZA0wOYd9byI0xphup9c6ZZxsf7QBNWI1Y4ilbO9AeD06FUf7e0UStw76POa+aBe0Nse8QdwS7JfRtez7DKExxnQ7vdYpCxyrzj/fLs7mqj0Jb0CqKd9CbfpjstF+qBU9huageUjt0EvVzIFWYhtjTLfTq51yMXLQ6FLML6ETcLSz2f4F9vfQTDQVPSUnTPgRasVWs0cBnPh6BAPbttJBOWrzbtfGbdLB324jAjVdpeZFXvBvRtsYUy38KLdGC3HEU9C6aCjbS3K53GLCE/SjJa5iH2b2eZB9kkO+02MRJiO4xxfF250UPTuxCGMaQp8YisxvRx/sfo5U878DvU3cCsJZsTasH9ZlxO2P3JfZGNNj6XHNFzhN/Ghps0IlqMkMZP8jOe4CNtUdbjzShzw1Z6hnxjeQeluMYftN0g7n39HH2W4Hed1DsGvbVl20UM6gaOuabqfMA+KmAe7JTgT6MCv7Ge7Pv2TXimrK3PMJssnvHYJUTQ5ncm7Toh2grCMoK1+hmYb9YbSN6b3wwwkvBMLBPOTD0Ui0HRqjkPgtCEegtbRvfv9iiGtGX2afR9DzaLfi/bD7E7c+oYZiz0XLkNqcM4UybqXMAPZKgr1ikolwXwrNDdjXxOiaKcsv9LzJivg3DWCrG6YxyWh48wXPsRysuqntwgN9LKH6Gl9M+FtC6XJ0Rdy+BJ2LfQLajf3XIyycM/aW6GTMLdEkaiyzUXEtWz0udMwehPrx/Jn0uUrICs7xeMo4MG6KS9i+N9rGGNP94BTliFUjHi1HjKYi1W41Z8Xb6H20EhWTQyvQO+gl9Ci6Ef0IyaGPzOVyFxC+hq5E6v4WysLWzHEbYn+b8HY0D6nM0eGEMoL8t0Vqzw5gP0rgCZI6gHvjmrIx3QEP7SCkZgk50zvQfKRmBDndQHy+V0vcTfu/h+SgH8IhayJ72f9Gn2M3TVA0hHAbwoPRdWgO27MJJ6HtsTOb0pO8WyjjYcIAtl4matM2HcC9sVM2pgMya77geVWNVf1+NXDjbHQa+grajH/n10LNKEBcReJu2n8w2oQojcwbh9Q3VaPyBlGeBo4cTXgW4UT2+xShnPKvCa9k+2mUw84KNZ/ovPKc3tzc/GS0jTGme5FDRuPRY0g13BwOMinkKfSBbwY1Z9WIX9Y2tpoqDkNqc9aERZn2MqGcPdFH4aQA+7aYZFYD9+hstCTqohhdM8oj3v5G1JQXxfNeQnGaU8WYng0Pq5os9KPTw9tp80Q94IBVRL4p5HU0AY0kqSGrj1CWXj7z284mOAS9GIbHZNMguOcNc8rGZEny5gt+ExrIcSo6EW3Iv/SZ1lKbm0MrSP46lqEHiJtPXJZNFcWoaWRzGVy7yjyO8l/TtjHGdJWkThmntAbSYI3j0XB5y5DQOIYidZ1LPn9FR3CtR3GJh8RN8Tsc8p3RNsaYLpO6pqw5jo9WWI1DxqlVRdy9IrG8IUgfFkdxWKYvBBy/ytAESAHsOZzC6XHTGGNqInVNeQyBej2sNl/2KZCPiqGQrQEfJWlx9wIhpWPUjqxJ7PdGmdWWOQVd3xSccPjIw/Zygu+zrfk2jDGmZpLWJnFOE9H5sdbaDmqXmthC7a4fsN872Jqf4HW0FMmxvY/klLVSyCDS18ZWtzp9OFOobc0rsdqPeBwnp/0AOqK5uXlhiEwMRWhK0HPatsL2eMq6LG5WDfdDIxa3bdtKzkTOSXNHF6A8ddnTCMpGsoLzUJNWCZzLDwgOatvqN4N9NJKzZsiveO6LaeR3WEjIAMr6C0H+GTyEsjTXRoGya0uNru3GaAe4Xq3i/pO4mZq7KO830S5Qdg9SUs3zkpqplPnHaBdo9DXmSeqUc7ncpfwwfoxK8uWBUXc4fYRbRNJ/CbUm3nz2X9y/f3/NM/wu8cvZR/Mcy6nq653W0VsLewj2cOxNsbdGO6JRSE56AGnlZel4laUfy4wQmRCy19qA9+n84rYcytdDYhfhj/4g+WhVlORwXntxXvfFzQDl7Ud5etAaBufxPucxOG4W4FyKnahWfzkuJNRIWX63YZ8REuqAfFZyXloQoQTKWkn+4cfKPsPYp2Tyo+JzSQ3lTaI89cUvQNxRBFrcITnkfQPlqUmyhOJ7kBLK6/R5SQ1lnkWZk+JmgUZfY57UbcolTpLChf6l18CNqUiDSFTLvBx7WktLy12EjyClL+BEF6HF6GW2X0BPYD/E/tOxJyMNBNEDeTH6J3qL/FWzLsA+Kl/OXKtcJ33p8Ef6GHnqPPIOWesCHivb9Bz4+2jukacTqK6Z64yphdRO6wp+ECfJxmGpxqopDeVUr0X/QJo680NUqV24ImSrN1cYTk14OPom0lp95S+Dm6iFHxqjkkCeUwiOjLau4SBeGrdouxa4X4WaMtldSaBml3rQ/Q/DfsmvYk2Z9AUE1dQmR3BM+PeVY7SEVjX/Jhcf0/Cacio4rzc4r/wakAUoq+qaMul/J7hadh2cTH5jZZBfRzXlzZGmp03Fdylvfxnk22lNmX3U/bWelXW6+rz8lUArCdVD8T3ttKbciGvMBC5Cs7sFsDWg4ymkieXXjLskgzw118Vm6DKkSY0Kg1TigJL7MZO9dMjvO225t8H2VTGpZsijsNIJdt0rXJDHopid8tOw8xKI2y8mK73DOaXLYT/NGRLAfjZGV6TsGH0raAfxWc59sRzlRwvWow6HyRNfce4L4pIOZCGPm2N2yu+8GJ0ZlHF5LE7lTY7RJRBffA80S2PNcHx3PC/F9/TMGF0C8Q29xjypmy+KUfvwPbwd/oaS90ogz1beNvqQJ+f4KCqufctWE0YSuImbEWgq0QD3VW3iWX1YMfVzK8/GBgnkCaVMw0ntlEPNVG8DAn2R1gcxfXTLDPJ/jkArQ4S3WoyT9G9Hqpqy2pGHyaAIvWCO5gf7nraNMb2SufyW75WwX2iL6hlkWVNW97bMZ0nDWepDnz4YqrwCeQddL9SSzyBvzW6X51wc8sPRNsb0QvgN63e8d1TJcl/dTZZOWf2R1f84c3Camq2rpK8oyEnX5ZhxyOrXqx4jAcq4nz+g1gI0psfAc6nV27dJJbLUyFhTiuZkn1yr8FEFP9JQKDx86CMUC9AnYlKmUOTalKUVSML0oCocbsesufmC49dCTyo/ga0Z6NS2nAzy84c+wO5Tk9ynPhfyqPihj7gJMTk55N0nP/RVA+UUrjElq7vGPFnWlLWa8w6cQ8UylI40kdEATlbLOA2UjTSqT2kVHSvp/ZEWQ9VyUMX7qq9zPTVlDYQpHm13CrXkTEYIGmNMniydsv4FGofDHCHn2hbVhhwpzldzLmuk3vZE7U6ofpHqc3wg9r5orNLQJmgo0mT15fnImX8S8xhUvBaenHFVtbqO4Lw0BLIwKIQypuCQ/xA3jemx8KxqZOz8OtWQZsfuhN+4VrnfVMIO63tWgv3OJ1C//hQq6WeeKVxceT9lNWGchrZCWlV6XcIN0RikdfQuQXcirU7yNHoWPYMeRw/ncjmlXc9xEwn3R1rrT05eq2EPwx6LrmG/twhDP2WFoIVYvxpPq0tw3EboFeUlsHVOnf7RaoF83XwB2G6+qAB5VN18gX1PjK4Z8nA/ZSA+2TV2hdQ15eKJ5ZuQ1tPThPcXohO5tpMJz0Xq86uh0hrFpRndPo1U49WcFlsh9Q/duampSWmHctxPCTUaRsedxfYx3CTlq2WEDmW/oUjl5XmJzVqbGq7j2A1kUI5GH6r7W/lHRGOMyYTUTnmpXioyopNU/nJwapLQ7GSa90JDNjW8UQ5bC6hq1rfVoSYJjQbUaiYj0e5INcpfoYloV6Q8ih2ymi5mU17J0NdqkKMnq6/FTV3DBWhm3DTGmMwpdmZ1g1OTw70aR1bcvqsaZ8kHN9JrLrezvEh+l0CrWavGq7k3qobzL56LQi8XzdtRz8fCPA9S21ZbUgll5c0mWCS7DvYhP31gVX6dzX2hyZ52CAkV4JjtOSY0dXDMcxyjmfoqUnZMw+e+IL+sp+7sytwXdZ8L+d1Mft+STX7t5r4gfQLpYfFZ0pcQ1NuPfjT5hb8z+VUz98Uo9nk+JNQAeXX1eVFZT8iug8+QX+gdRn7VzH2h+TY+kJ2ICZTZbgbC5HARauPVnAGZLpa6OihW7dizMHeKp9QlOLbQxpsS8p0eiyghq/IEebtNOSPIv8e2KaeGvHtcm3JqyLvTNuXUkLfGQHRI0uYL3iqaE0Jv6dBfOEQ2iHClq1Yt4xz0RtO0iyYB3E89mIslNjVVqTEmQ5I2X/DDbUL7YGrC7fCxjB910jI6gjL1ApD0QjiSfws0H0aX4e2l2mW7qRoToHmi203LmWF5QqMPS1bV5japa6E+qIr3SM9kGDzXFfqoy+bPn0OPyS6GfbR02Oi2rX7zOBc139RMWX6am3tWtJNDWQcThAoN13YLKmkmS30u5KdvMPmBWGp2KvnXnb+pRuJpGbYseIHyHol2geJ7ANPZp+a5YOJzmf+Wo4UFbo52gbJ7mpq5lKkKZQll15iauynzf9HOFm6uptQ8jXApYagxZwllCDVbaETfuHgaxhhj8uAr18RBnocWo5UokzZm5QvKfyE6iajQKG+MMaYMnKQGi0zM5XIafPEhSuqYlR98gDTQ5IdEJZ9I3xhj+hQ4So3gOwTNRCtQWBIkeNUa0fGg2vEydDfSyiZa5doYY0xn4DBbcJwjCS8kfAmp1hycs5CjrUTcLY+csWrH89DPkObFcJOFMabPkHnPiGJwojsSaLFT9TrYGIc6pKmtc7akr5z589HADQ3ZllYirfahoc7qJ3s3x2gJeS38aYwxfYqGOmWBI9Zov2GEmuNiU6SmB7UHa9l+OWZ1bdP6fho9I6nv8avsr6k4NVppOWEYym2MMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY0xW9Ov3f4qaMBWk/xQcAAAAAElFTkSuQmCC"
              className="big"
              alt="ZOMI Logo"
              width="110em"
            ></img>
          </div>
        </div>
        <div className="navbar-middle">
          <ul className="menu">
            <li><Link to="/" className="Link"> Home</Link></li>
            <li><Link to="/dashboard" className="Link">Dashboard</Link></li>


            <li>NFT</li>
            <li><Link to="/mainearn" className="Link" >earn</Link></li>

            <li>Buy</li>
            <li>Refrence</li>
            <li>Ecosystem</li>
            <li>About</li>
          </ul>
        </div>
        {togle ? (
          <div className="navbar-middle2" onClick={handclose}>
            <ul className="menu2">
              <li><Link to="/" className="Link">Home</Link></li>

              <li><Link to="/dashboard" className="Link">Dashboard</Link></li>
              <li><Link to="/mainearn" className="Link" >earn</Link></li>
              <li>Buy</li>
              <li>Refrence</li>
              <li>Ecosystem</li>
              <li>About</li>
            </ul>
          </div>
        ) : null}

        <div className="navbar-left">
          <Button
            variant="contained"
            size="small"
            sx={{ backgroundColor: "#3eb489" }}
          >
            Trade
          </Button>

          <Button
            size="small"
            variant="outlined"
            onClick={handledialog}
            startIcon={<AccountBalanceWalletIcon />}
            sx={{
              color: "white",
              border: "1px solid rgb(235 239 244 / 50%)",
              "&:hover": {
                border: "1px solid #f0f2f4",
              },
              textTransform: "capitalize",
            }}
          >
            Connect wallet
          </Button>
          <div></div>

          <div style={{ display: "flex", flexFlow: "row-reverse" }}>
            <Button variant="outlined" aria-label="delete" color="primary" sx={{
              color: "white",
              border: "1px solid rgb(235 239 244 / 50%)",
              "&:hover": {
                border: "1px solid #f0f2f4",
              },
              textTransform: "capitalize",
              minWidth: "1em"
            }}>
              <MoreVertIcon sx={{ color: "white" }} />
            </Button>
            <Button variant="outlined" aria-label="delete" color="primary" sx={{
              color: "white",
              border: "1px solid rgb(235 239 244 / 50%)",
              "&:hover": {
                border: "1px solid #f0f2f4",
              },
              textTransform: "capitalize",
              minWidth: "2em",
              padding: "0px"
            }}>
              <img
                style={{ height: "20px", width: "20px", borderRadius: "50%" }}
                src="ethereum-icon_578229-266.avif"
              />
            </Button>
          </div>


          <Dailogs open={open} setOpen={setOpen} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
