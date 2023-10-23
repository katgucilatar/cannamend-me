/* CONTAINS PERSONAL CONTACT INFO (LINKEDIN, GITHUB, EMAIL) */

'use client';

import { Footer } from 'flowbite-react';
import { BsGithub, BsLinkedin, BsFillChatRightTextFill } from 'react-icons/bs';

export default function Footer() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              alt="My Logo"
              href="https://kgucidev.com"
              name="KGuci Dev"
              src="../assets/feroce.png"
            />
            <Footer.Copyright
            by="Katrina Gucilatar™"
            year={2023}
          />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="github" />
              <Footer.LinkGroup row>
                <Footer.Link href="https://github.com/katgucilatar">
                  katgucilatar
                </Footer.Link>
                <Footer.Icon
                    href="https://github.com/katgucilatar"
                    icon={BsGithub}
                />
                </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="linkedin" />
              <Footer.LinkGroup row>
                <Footer.Link href="https://www.linkedin.com/in/katrina-gucilatar-59983217b/">
                  Katrina Gucilatar
                </Footer.Link>
                <Footer.Icon
                    href="https://www.linkedin.com/in/katrina-gucilatar-59983217b/"
                    icon={BsLinkedin}
                />
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="email" />
              <Footer.LinkGroup row>
                <Footer.Link href="https://www.microsoft.com/en-us/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook?deeplink=%2fowa%2f&sdf=0">
                  katgucilatar@outlook.com
                </Footer.Link>
                <Footer.Icon
                    href="https://www.microsoft.com/en-us/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook?deeplink=%2fowa%2f&sdf=0"
                    icon={BsFillChatRightTextFill}
                />
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  )
}