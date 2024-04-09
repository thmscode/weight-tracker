import Button from "@mui/material/Button";

const NavButton: React.FC<{ href: string; label: string }> = ({ href, label }) => {
  return (
    <Button
      href={href}
      color="inherit"
      sx={{
        letterSpacing: "0.1rem",
        fontSize: { xs: "0.9rem", md: "1rem", lg: "1.125rem" },
      }}
    >
      {label}
    </Button>
  );
};

export default NavButton;
