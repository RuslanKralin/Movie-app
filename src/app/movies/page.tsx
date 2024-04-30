import { ColorInput, Input } from '@mantine/core'
import { Button } from '@mantine/core'
import { TextInput, TextInputProps, ActionIcon, useMantineTheme, rem } from '@mantine/core'
import { NativeSelect } from '@mantine/core'
// import { IconChevronDown, IconHash } from '@tabler/icons-react';
import { IoSearchOutline } from 'react-icons/io5'
import { IoIosArrowDown } from 'react-icons/io'

import styles from './styles.module.css'

export default function Movies() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.searchSection}>
        <div>
          <h1 className={styles.title}>Movies</h1>
        </div>
        <div>
          <TextInput
            className={styles.searchInput}
            radius="sm"
            placeholder="Search movie title"
            rightSectionWidth={95}
            leftSection={<IoSearchOutline style={{ width: rem(18), height: rem(18) }} />}
            rightSection={<Button className={styles.searchBtn}>Search</Button>}
            styles={{
              input: {
                borderColor: 'grey',
                ':focus': {
                  borderColor: '#9854F6'
                }
              }
            }}
          />
        </div>
      </div>
      <div className={styles.filtresSection}>
        <div>
          <h4>Genres</h4>
          <NativeSelect
            // placeholder= 'qwe'
            rightSection={<IoIosArrowDown style={{ width: rem(16), height: rem(16) }} />}
            data={['React', 'Angular']}
            mt="md"
          />
        </div>
        <div>
          <h4>Release year</h4>
          <NativeSelect
            rightSection={<IoIosArrowDown style={{ width: rem(16), height: rem(16) }} />}
            data={['React', 'Angular']}
            mt="md"
          />
        </div>
        <div>
          <h4>Ratings</h4>
        </div>
        <div>
          <h4>empty</h4>
        </div>
        <div>
          <p>Reset filters</p>
        </div>
      </div>
    </div>
  )
}
