function Footer() {
  return (
    <footer className="bg-black py-6 text-center text-sm text-gray-400 space-y-2">
      <p>
        © {new Date().getFullYear()} NASA Explorer | Built with 🚀 Sujit Sah
      </p>
      <p>
        Developed by Sujit Sah 🇳🇵
      </p>
      <p>
        Contact us: <br />
        📧{" "}
        <a
          href="mailto:sujitsahkanu732@gmail.com"
          className="text-blue-400 hover:underline"
        >
          sujitsahkanu732@gmail.com
        </a>{" "}
        | 📞{" "}
        <a
          href="tel:+9779808266236"
          className="text-blue-400 hover:underline"
        >
          +977-9808266236
        </a>
      </p>
    </footer>
  );
}

export default Footer;