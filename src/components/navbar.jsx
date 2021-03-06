import React, { Component } from "react";
import Anew from "anew";

//Material UI
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Navbar extends Component {
  static mapStateToProps(select) {
    return {
      userName: select.userInfo.getUserName()
    };
  }
  render() {
    const { classes } = this.props;
    console.log(this.props);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.grow} variant="h6" color="inherit">
              {this.props.pathname.slice(1)}
            </Typography>
            <Button color="inherit">{this.props.userName}</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Anew.connect(Navbar));
