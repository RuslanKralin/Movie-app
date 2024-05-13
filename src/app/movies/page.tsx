'use client'
import { Box, ColorInput, Input, Text, Title, ColorPicker } from '@mantine/core'
import Link from 'next/link'
import { Button } from '@mantine/core'
import { TextInput, TextInputProps, ActionIcon, rem } from '@mantine/core'
import { NativeSelect } from '@mantine/core'
// import { IconChevronDown, IconHash } from '@tabler/icons-react';
import { IoSearchOutline } from 'react-icons/io5'
import { IoIosArrowDown } from 'react-icons/io'

import styles from './styles.module.css'
import { useState } from 'react'
import { useMantineTheme } from '@mantine/core'

export default function Movies() {
  const theme = useMantineTheme()
  console.log(theme)

  const [value, onChange] = useState('rgba(47, 119, 150, 0.7)')
  // console.log(theme.colors)
  return (
    <Box className={styles.wrapper}>
      <Box className={styles.searchSection}>
        <Box>
          <Title order={2} size={40} component="p">
            Movies
          </Title>
          {/* <h1 className={styles.title}>Movies</h1> */}
        </Box>
        <Box>
          <TextInput
            // className={styles.searchInput}
            // radius="sm"
            placeholder="Search movie title"
            rightSectionWidth={95}
            leftSection={<IoSearchOutline style={{ width: rem(18), height: rem(18) }} />}
            rightSection={<Button className={styles.searchBtn}>Search</Button>}
            // styles={{
            //   input: {
            //     borderColor: 'grey',
            //     ':focus': {
            //       borderColor: '#9854F6'
            //     }
            //   }
            // }}
          />
        </Box>
      </Box>
      <Box className={styles.filtresSection}>
        <Box>
          <h4>Genres</h4>
          <NativeSelect
            // placeholder= 'qwe'
            rightSection={<IoIosArrowDown style={{ width: rem(16), height: rem(16) }} />}
            data={['React', 'Angular']}
            mt="md"
          />
        </Box>
        <Box>
          <h4>Release year</h4>
          <NativeSelect
            rightSection={<IoIosArrowDown style={{ width: rem(16), height: rem(16) }} />}
            data={['React', 'Angular']}
            mt="md"
          />
        </Box>
        <Box>
          <h4>Ratings</h4>
        </Box>
        <Box>
          <h4>empty</h4>
        </Box>
        <Box>
          <p>Reset filters</p>
        </Box>
      </Box>
      <Text size="xl" variant="gradient" gradient={{ from: 'blue', to: 'red', deg: 90 }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, ut perspiciatis.
        Nemo rem provident necessitatibus iusto fuga veritatis, optio ab debitis aliquam natus
        impedit tenetur! Ut autem temporibus voluptatum dolorem.
      </Text>
      <Text lineClamp={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum similique voluptate
        voluptatum sunt reprehenderit cupiditate, natus quos itaque veritatis, unde dolores harum,
        quia recusandae. Aspernatur, explicabo dicta quaerat odit nam error quae unde maxime
        tempora, quis ea repudiandae nihil id est ex consequatur, laborum vero sunt qui dolorum
        accusamus quas saepe praesentium? Illum itaque cupiditate, vero quae nemo veniam laudantium
        iusto excepturi esse, sed recusandae impedit qui illo ratione porro? Dolorem facilis
        voluptates alias at, cum expedita, deserunt laboriosam dolore fugiat aspernatur quod magni
        inventore eum obcaecati, deleniti accusamus libero! Rem ullam rerum mollitia voluptas
        aliquid animi velit illo cumque!
      </Text>
      <Text truncate="start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum similique voluptate
        voluptatum sunt reprehenderit cupiditate, natus quos itaque veritatis, unde dolores harum,
        quia recusandae. Aspernatur, explicabo dicta quaerat odit nam error quae unde maxime
        tempora, quis ea repudiandae nihil id est ex consequatur, laborum vero sunt qui dolorum
        accusamus quas saepe praesentium? Illum itaque cupiditate, vero quae nemo veniam laudantium
        iusto excepturi esse, sed recusandae impedit qui illo ratione porro? Dolorem facilis
        voluptates alias at, cum expedita, deserunt laboriosam dolore fugiat aspernatur quod magni
        inventore eum obcaecati, deleniti accusamus libero! Rem ullam rerum mollitia voluptas
        aliquid animi velit illo cumque!
      </Text>
      <Text span>Same as below</Text>
      <Text component="span">Same as above</Text>
      <Button component="a" href="/" color="red.9">
        Кнопоска
      </Button>
      <Button component={Link} href="/">
        Кнопоска
      </Button>

      <ColorPicker format="rgba" value={value} onChange={onChange} />
      <Text>{value}</Text>

      <ColorPicker format="hex" fullWidth size="lg" />
    </Box>
  )
}
