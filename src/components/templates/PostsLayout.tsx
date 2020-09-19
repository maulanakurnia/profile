import { MDXFrontMatter } from "*.mdx";
import widont from "utils/widont";
import formatDate from "utils/formatDate";
import { ReactNode } from "react";
import siteConfig from "config/siteconfig.json";
import MDXComponent from "./MDXComponent";
import {
  Text,
  Container,
  Flex,
  Link,
  Box,
  Image,
  useColorModeValue,
} from "@chakra-ui/core";
import { PageHeader } from "atoms/index";
import { FiClock, FiCalendar } from "react-icons/fi";
import { NextSeo } from "next-seo";
import { SectionLicenses } from "molecules/PostsPage/SectionLicenses";
import { SectionDaftarIsi } from "molecules/PostsPage/SectionDaftarIsi";

type LayoutProps = {
  frontMatter?: MDXFrontMatter;
  children: ReactNode;
  readingTime: String;
};

export default function Layout({
  children,
  frontMatter,
  readingTime,
}: LayoutProps) {
  const site = siteConfig;
  const title = frontMatter?.title || site.title;
  const isRoot = title == site.title;
  const date = frontMatter?.date;
  const formattedDate = formatDate(date || "");
  const description = frontMatter?.description;
  const ogSlug = frontMatter?.ogSlug;
  const editUrl = `https://github.com/maulanakurnia/personalwebsite/edit/master/blog/${frontMatter.slug}.mdx`;
  const Border = useColorModeValue(
    "1px solid #dadce0",
    "1px solid rgb(39, 41, 46)"
  );
  return (
    <MDXComponent>
      <NextSeo
        title={title + " | " + site.title}
        description={description || site.description}
        twitter={site.twitter}
        openGraph={{
          locale: "en_ID",
          images: [
            {
              url: ogSlug
                ? `${process.env.VERCEL_URL}og/${ogSlug}`
                : `${process.env.VERCEL_URL}images/og.png`,
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
          ],
        }}
      />
      <Box>
        <PageHeader title={widont(title)} />
        {!isRoot && (
          <Flex justifyContent="space-between" mt={["0", "-20px"]}>
            {date && (
              <Text as="span" display="flex" fontSize="md">
                <Text as="span" mr="5px" my="auto">
                  <FiCalendar />
                </Text>
                {formattedDate}
              </Text>
            )}
            <Text as="span" display="flex">
              <Text mr="5px" my="auto">
                <FiClock />
              </Text>
              {readingTime}
            </Text>
          </Flex>
        )}
        <SectionDaftarIsi
          display={["block", "none"]}
          my="1em"
          fontSize="16px"
          borderTopWidth="1px"
          pb="1em"
          borderBottomWidth="1px"
          pt="1em"
        />
        {children}
        <SectionLicenses editUrl={editUrl} />
      </Box>
    </MDXComponent>
  );
}