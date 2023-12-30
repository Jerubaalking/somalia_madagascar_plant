<template>
   <div class="flex flex-col top-0 left-0 w-full mb-5 text-base bg-white" style="z-index: 999;">
        <div class="relative px-6 border border-gray-100 py-2  drop-shadow-2xl">
            <div class="max-w-1xl flex flex-box xl:container xl:mx-auto xl:px-4 lg:items-center justify-between">
                <button type="button" class="lg:hidden" @click.prevent="">
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M6.78125 9.04199C6.78125 8.50697 7.21497 8.07324 7.75 8.07324H19.375C19.91 8.07324 20.3438 8.50697 20.3438 9.04199C20.3438 9.57702 19.91 10.0107 19.375 10.0107H7.75C7.21497 10.0107 6.78125 9.57702 6.78125 9.04199ZM6.78125 15.5003C6.78125 14.9653 7.21497 14.5316 7.75 14.5316H23.25C23.785 14.5316 24.2188 14.9653 24.2188 15.5003C24.2188 16.0354 23.785 16.4691 23.25 16.4691H7.75C7.21497 16.4691 6.78125 16.0354 6.78125 15.5003ZM6.78125 21.9587C6.78125 21.4236 7.21497 20.9899 7.75 20.9899H15.5C16.035 20.9899 16.4688 21.4236 16.4688 21.9587C16.4688 22.4937 16.035 22.9274 15.5 22.9274H7.75C7.21497 22.9274 6.78125 22.4937 6.78125 21.9587Z"
                            fill="gray" />
                    </svg>
                </button>

                <h1 class="lg:py-6 text-3x1 text-gray ">
                  Somalia & Madagascar Plant
                </h1>


                <div class="hidden lg:flex items-center">
                    <div class="flex items-center space-x-8">

                        <button class="flex flex-col items-center" @click=""
                            data-testid="header-notification-icon">
                            <p class="font-medium text-gray-500">Plants</p>
                        </button>
                        <!--<ShoppingCart />-->
                        <button class="flex flex-col items-center" @click=""
                            data-testid="header-wishlist-icon">
                            <p class="font-medium text-gray-500">Contact</p>
                        </button>

                        <div 
                            class="flex items-center pr-4 text-left py-3 space-x-4 overflow-hidden"
                            data-testid="header-order-icon">
                            <button class="flex flex-col items-center">
                                <p class="font-medium text-gray-500"></p>
                            </button>
                        </div>
                        <Dropdown placement="bottom-end" :skidding="12" :distance="16" :arrow-padding="16">
                            <button class="flex flex-col items-center">
                                <svg class="h-5 w-5 text-gray-500" stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M2.5 12.5L8 14.5L7 18L8 21" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M17 20.5L16.5 18L14 17V13.5L17 12.5L21.5 13" stroke="currentColor"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M19 5.5L18.5 7L15 7.5V10.5L17.5 9.5H19.5L21.5 10.5" stroke="currentColor"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M2.5 10.5L5 8.5L7.5 8L9.5 5L8.5 3" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>

                                <span class="font-medium text-white uppercase tracking-wider">
                                  
                                </span>
                            </button>

                        </Dropdown>

                    </div>
                </div>
                <div class="lg:hidden ">
                    <template>
                        <!-- <div >
                            <svg class="h-6 w-12 my-2 text-white" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M9.58555 5.71861C9.07051 6.36249 8.75 7.41361 8.75 9C8.75 11.3176 9.43393 12.3992 9.95117 13.0199C10.0723 13.1652 10.187 13.2883 10.302 13.4119C10.3201 13.4312 10.3381 13.4506 10.3562 13.4701C10.4754 13.5985 10.6279 13.7634 10.7403 13.9382C10.8596 14.1238 10.9904 14.4058 10.9449 14.7566C10.9011 15.095 10.7115 15.3491 10.5303 15.5303C9.94606 16.1146 9.23719 16.5324 8.55416 16.8739C8.21112 17.0455 7.86224 17.2036 7.5321 17.3531L7.52681 17.3555C7.19391 17.5063 6.88113 17.648 6.58541 17.7958C5.98306 18.097 5.5242 18.3898 5.21468 18.735C4.92763 19.0552 4.75 19.4409 4.75 20C4.75 20.4142 4.41421 20.75 4 20.75C3.58579 20.75 3.25 20.4142 3.25 20C3.25 19.0591 3.57237 18.3198 4.09782 17.7337C4.6008 17.1727 5.26694 16.778 5.91459 16.4542C6.23627 16.2933 6.57144 16.1415 6.89501 15.995L6.91321 15.9867C7.24713 15.8355 7.57012 15.6889 7.88334 15.5323C8.45207 15.2479 8.94869 14.9493 9.34586 14.5877C9.32069 14.5598 9.29134 14.5277 9.25704 14.4908C9.24123 14.4738 9.22464 14.456 9.20736 14.4374C9.09302 14.3148 8.94855 14.1598 8.79883 13.9801C8.06607 13.1008 7.25 11.6824 7.25 9C7.25 7.25339 7.59599 5.80451 8.4142 4.78164C9.25798 3.72678 10.5009 3.25 12 3.25C13.499 3.25 14.742 3.72678 15.5858 4.78164C16.404 5.80451 16.75 7.25339 16.75 9C16.75 11.6824 15.9339 13.1008 15.2012 13.9801C15.0514 14.1598 14.907 14.3148 14.7926 14.4374C14.7754 14.456 14.7588 14.4738 14.743 14.4908C14.7087 14.5277 14.6793 14.5598 14.6541 14.5877C15.0513 14.9493 15.5479 15.2479 16.1167 15.5323C16.4299 15.6889 16.7529 15.8355 17.0868 15.9867L17.1049 15.995C17.4285 16.1415 17.7637 16.2933 18.0854 16.4542C18.7331 16.778 19.3992 17.1727 19.9022 17.7337C20.4276 18.3198 20.75 19.0591 20.75 20C20.75 20.4142 20.4142 20.75 20 20.75C19.5858 20.75 19.25 20.4142 19.25 20C19.25 19.4409 19.0724 19.0552 18.7853 18.735C18.4758 18.3898 18.0169 18.097 17.4146 17.7958C17.1189 17.648 16.8061 17.5063 16.4732 17.3555L16.4679 17.3531C16.1378 17.2036 15.7889 17.0455 15.4458 16.8739C14.7628 16.5324 14.0539 16.1146 13.4697 15.5303C13.2884 15.3491 13.0989 15.095 13.055 14.7566C13.0096 14.4058 13.1404 14.1238 13.2597 13.9382C13.3721 13.7634 13.5246 13.5985 13.6438 13.4701C13.6619 13.4506 13.6799 13.4312 13.698 13.4119C13.813 13.2883 13.9277 13.1652 14.0488 13.0199C14.5661 12.3992 15.25 11.3176 15.25 9C15.25 7.41361 14.9295 6.36249 14.4144 5.71861C13.925 5.10672 13.1679 4.75 12 4.75C10.832 4.75 10.075 5.10672 9.58555 5.71861ZM14.4993 14.4352C14.4993 14.4352 14.4999 14.4359 14.5009 14.4375C14.4997 14.4359 14.4992 14.4352 14.4993 14.4352ZM9.50072 14.4352C9.50077 14.4352 9.50025 14.4359 9.49905 14.4375C9.50008 14.4359 9.50068 14.4352 9.50072 14.4352Z"
                                    fill="white" />
                            </svg>
                        </div> -->
                        <!-- <button class="flex flex-col items-center">
                                <svg class="h-6 w-12 text-gray" stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M2.5 12.5L8 14.5L7 18L8 21" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M17 20.5L16.5 18L14 17V13.5L17 12.5L21.5 13" stroke="currentColor"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M19 5.5L18.5 7L15 7.5V10.5L17.5 9.5H19.5L21.5 10.5" stroke="currentColor"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M2.5 10.5L5 8.5L7.5 8L9.5 5L8.5 3" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>

                                <span class="font-medium text-white uppercase tracking-wider">
                                  
                                </span>
                            </button> -->
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
h1 {
  font-family: monospace;
}
</style>
<script>
export default{
  
}
</script>