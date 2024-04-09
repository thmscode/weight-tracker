import Link from "@mui/material/Link";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const AuthItem: React.FC<{ label: string; fn: () => void }> = ({ label, fn }) => {
  return (
    <ListItem disablePadding component={Link}>
      <ListItemButton onClick={fn} sx={{ textAlign: "center" }}>
        <ListItemText
          disableTypography
          primary={label}
          sx={{
            color: "black",
            letterSpacing: "0.1rem",
            fontSize: "0.9rem",
            textTransform: "uppercase",
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default AuthItem;
