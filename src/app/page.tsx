"use client"
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Coffee, Croissant, Droplets, Instagram, Facebook, Twitter, Sparkles, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="small"
      sizing="medium"
      background="animatedGrid"
      cardStyle="layered-gradient"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764332265864-8u83irtb.jpg"
          logoAlt="The Daily Brew Coffee Shop"
          brandName="The Daily Brew"
          button={{
            text: "Reserve Table",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Welcome to The Daily Brew"
          description="Discover the finest specialty coffee and cozy atmosphere in the heart of the city"
          tag="Premium Coffee Shop"
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764332267291-jvs5c6e4.jpg",
              imageAlt: "Specialty coffee with latte art"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764332269096-qjv4mk1u.jpg",
              imageAlt: "Modern coffee shop interior"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764332270504-6eny6ws5.jpg",
              imageAlt: "Professional espresso machine"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764332271763-0iblwar9.jpg",
              imageAlt: "Fresh coffee beans"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764332273435-xpyn18m9.jpg",
              imageAlt: "Morning coffee moment"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764332276081-3i3yxhip.jpg",
              imageAlt: "Expert barista at work"
            }
          ]}
          buttons={[
            {
              text: "View Menu",
              href: "#features"
            },
            {
              text: "Reserve Now",
              href: "#contact"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Story"
          description="At The Daily Brew, we believe coffee is more than just a beverage—it's an experience. Since 2018, we have been roasting the finest single-origin beans and crafting each cup with precision and passion. Our baristas are trained to perfection, and our cozy space welcomes everyone from morning commuters to afternoon readers to evening entrepreneurs."
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFive
          title="Our Specialty Menu"
          description="From classic espresso to creative seasonal blends"
          tag="Curated Selection"
          features={[
            {
              title: "Espresso Classics",
              icon: Zap
            },
            {
              title: "Cappuccino & Latte",
              icon: Coffee
            },
            {
              title: "Cold Brew",
              icon: Droplets
            },
            {
              title: "Seasonal Specials",
              icon: Sparkles
            },
            {
              title: "Fresh Pastries",
              icon: Croissant
            }
          ]}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="What Our Customers Say"
          description="Join thousands of coffee lovers who visit us every month"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Designer",
              company: "Creative Studios",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764332282518-def9euvr.jpg"
            },
            {
              id: "2",
              name: "James Chen",
              role: "Entrepreneur",
              company: "Tech Startup",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764332284128-yyc5xcw5.jpg"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Freelancer",
              company: "Remote Worker",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764332286013-ho3rkzas.jpg"
            },
            {
              id: "4",
              name: "David Wilson",
              role: "Student",
              company: "Local University",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764332287337-goobm4wy.jpg"
            }
          ]}
          textboxLayout="default"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get in Touch"
          description="Ready to visit us or have questions about our menu? Drop us a line and we'll get back to you within 24 hours."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your visit or ask anything...",
            rows: 4,
            required: true
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764332288680-8ty9ln9p.jpg"
          mediaPosition="right"
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="The Daily Brew"
          columns={[
            {
              title: "Hours",
              items: [
                {
                  label: "Mon-Fri: 6am-7pm",
                  href: "#"
                },
                {
                  label: "Sat: 7am-8pm",
                  href: "#"
                },
                {
                  label: "Sun: 8am-6pm",
                  href: "#"
                }
              ]
            },
            {
              title: "Location",
              items: [
                {
                  label: "123 Coffee Street",
                  href: "#"
                },
                {
                  label: "Downtown District",
                  href: "#"
                },
                {
                  label: "Call: (555) 123-4567",
                  href: "#"
                }
              ]
            },
            {
              title: "Quick Links",
              items: [
                {
                  label: "Our Menu",
                  href: "#features"
                },
                {
                  label: "About Us",
                  href: "#about"
                },
                {
                  label: "Contact",
                  href: "#contact"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com",
              ariaLabel: "Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com",
              ariaLabel: "Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com",
              ariaLabel: "Twitter"
            }
          ]}
          copyrightText="© The Daily Brew, 2025. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}