import { Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold gradient-text mb-4 font-space">TEDxBVCOE</h3>
            <p className="text-muted-foreground mb-6">Ideas Worth Spreading</p>
            <div className="space-y-3 text-muted-foreground text-sm">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">Organizer: Paridhi Harit</p>
                  <a href="mailto:Paridhi.tedxbvcoe@gmail.com" className="hover:text-primary transition-colors">
                    Paridhi.tedxbvcoe@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">Co-organizer: Ridhi Gupta</p>
                  <a href="mailto:ridhig.047@gmail.com" className="hover:text-primary transition-colors">
                    ridhig.047@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-xl font-bold text-foreground mb-6">Follow Us</h4>
            <div className="space-y-4">
              <a
                href="https://www.instagram.com/tedxbvcoe.2025/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/tedx-bvcoe/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xl font-bold text-foreground mb-6">Legal</h4>
            <div className="space-y-4">
              <a
                href="https://drive.google.com/file/d/1sG8G_2TdXA6USHhFxA0zbNK6rTkoAjne/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="https://drive.google.com/file/d/1sEDSFgmHAFKGZyUfDQaCa_skWHfo8ILG/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 TEDxBVCOE. All Rights Reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Developed by{" "}
            <a
              href="https://linktr.ee/Aditya__Shrivastav"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Anush Singla
            </a>
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/tedxbvcoe.2025/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/tedx-bvcoe/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
