import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import resume from "../images/resume.pdf";

export default function MenuListComposition() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const domain = process.env.REACT_APP_DOMAIN;

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Button
          ref={anchorRef}
          sx={{
            backgroundColor: "#F8F9FA", // Set background color
            "&:hover": {
              backgroundColor: "#E9ECEF", // Hover effect
            },
            color: "black",
            fontSize: "15px",
          }}
          // className="m-1 px-3 py-2 rounded-xl flex items-center justify-center border border-gray-500 bg-gray-400 hover:bg-gray-200 hover:border-gray-100 active:border-gray-300 gap-x-2 text-gray-700"
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-600" // You can adjust the color here if needed
          >
            <path
              d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
          menu
        </Button>

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-end"
          transition
          disablePortal
          className="w-48 bg-white drop-shadow-md rounded"
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-end" ? "left top" : "left bottom",
              }}
            >
              <Box>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                  >
                    <MenuItem className="w-full" onClick={handleClose}>
                      <a className="w-full h-full" href="/#about">
                        About
                      </a>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <a className="w-full h-full" href="/#projects">
                        Projects
                      </a>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <a className="w-full h-full" href="/#skills">
                        Skills
                      </a>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <a className="w-full h-full" href="/#experience">
                        Experience
                      </a>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <a
                        href={resume}
                        className="w-full h-full"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Resume
                      </a>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <a href="/contact" className="w-full h-full">
                        Contact
                      </a>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Box>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
