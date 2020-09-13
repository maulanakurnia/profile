import { Text, Box, Heading, Button, Flex } from "@chakra-ui/core";
import formatDate from "utils/formatDate";
import Link from "next/link";
export const SectionBlog = ({ posts }) => {
  return (
    <>
      <Text fontSize="30px" fontWeight="700" mt={10} mb={5}>
        Artikel Terbaru
      </Text>
      {posts.map((post, index) => (
        <Link as={`blog/${post.slug}`} href={`/blog/[...slug]`} key={index}>
          <Box
            mb="20px"
            _hover={{
              cursor: "pointer",
              '&>.title': {
                  color: '#2e7ad1'
              }
            }}
          >
            <Heading className="title" size="md">{post.title}</Heading>
            <Text fontSize="15px">{formatDate(post.date)}</Text>
            <Text mt="10px">{post.description}</Text>
          </Box>
        </Link>
      ))}
      <Flex justifyContent="center">
          <Link href="blog/">
            <Button justifyItems="center" size="sm">Lebih Banyak</Button>
          </Link>
      </Flex>
    </>
  );
};
