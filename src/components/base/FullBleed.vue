<template>
    <section class="full__bleed p__background">
        <div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit velit necessitatibus accusamus possimus non itaque rerum tenetur ea assumenda, saepe illum. Porro laboriosam officiis eius debitis culpa repellat dolores quis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit velit necessitatibus accusamus possimus non itaque rerum tenetur ea assumenda, saepe illum. Porro laboriosam officiis eius debitis culpa repellat dolores quis?</p>
        </div>
    </section>
</template>

<script>
export default {
  name: 'FullBleed',
}
</script>

<style lang="scss">
@import '~/assets/scss/base/_breakpoints.scss';
.full--bleed {
    width: 100vw;
    margin-left: 50%;
    transform: translateX(-50%);
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    background: var(--color-blk);
    color: var(--color-wh);

    div {
        display: -ms-flexbox;
        display: flex;
        flex-direction: column;
        max-width: var(--cont-width);
    .button {
        max-width: 20ch;
        &:focus,
        &:hover {
            background: var(--color-pri-drk);
            border-radius: 10px;
        }
    }
    }
}

@include respond-to(sm) {
    .full--bleed {
        flex-direction: row;
        padding: 1.5rem 1rem;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
    }
}

@include respond-to(md) {
    .full--bleed {
        padding: 2rem 1rem;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
}

</style>