import "./Header.scss"
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const Header: React.FC = () => {
    return (
    <div className="headerWrapper">
      <div className="headerContent">
        <h1 className="headerName">KEEPCORN</h1>
        
        <div className="actionButtons">
            <SearchIcon data-testid="SearchIcon" className="searchIcon" sx={{marginRight:"10px"}}/>
            <Button variant="contained" className="Button" sx={{borderRadius:"10px",marginRight:"10px"}}>Sign Up</Button>
            <MenuIcon className="searchIcon"/>

        </div>
      </div>
    </div>
    )
}

export default Header;