function Footer() {
  return (
    <footer className="bg-black py-4 text-center text-sm text-gray-400">
      <p>
        © {new Date().getFullYear()} NASA Explorer | Powered by NASA Open APIs <br />
        Developed by Sujit Sah 🇳🇵
      </p>
    </footer>
  );
}

export default Footer;
