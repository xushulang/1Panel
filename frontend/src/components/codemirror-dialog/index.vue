<template>
    <el-drawer v-model="codeVisiable" :destroy-on-close="true" :close-on-click-modal="false" size="50%">
        <template #header>
            <DrawerHeader :header="header" :back="handleClose" />
        </template>
        <codemirror
            ref="mymirror"
            :autofocus="true"
            placeholder="None data"
            :indent-with-tab="true"
            :tabSize="4"
            style="width: 100%; height: calc(100vh - 160px)"
            :lineWrapping="true"
            :matchBrackets="true"
            theme="cobalt"
            :styleActiveLine="true"
            :extensions="extensions"
            v-model="detailInfo"
            :disabled="true"
        />
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="codeVisiable = false">{{ $t('commons.button.cancel') }}</el-button>
            </span>
        </template>
    </el-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Codemirror } from 'vue-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import DrawerHeader from '@/components/drawer-header/index.vue';

const mymirror = ref();

const extensions = [javascript(), oneDark];
const header = ref();
const detailInfo = ref();
const codeVisiable = ref(false);

interface DialogProps {
    header: string;
    detailInfo: string;
}

const acceptParams = (props: DialogProps): void => {
    header.value = props.header;
    detailInfo.value = props.detailInfo;
    codeVisiable.value = true;
};

const handleClose = () => {
    codeVisiable.value = false;
};

defineExpose({
    acceptParams,
});
</script>
