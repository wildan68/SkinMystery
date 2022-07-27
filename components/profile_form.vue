<template>
<form class="px-[24px] flex flex-col gap-[16px] w-[80%]">
    <div class="input_group">
        <label for="nama">Nama Lengkap</label>
        <input type="text" placeholder="Nama Lengkap" value="Annas Aisya Wulandari" />
    </div>
    <div class="input_group">
        <label for="nama">Email</label>
        <div class="flex w-full gap-[24px]">
            <input type="text" placeholder="Email" value="aaisyawldr@gmail.com" />
            <div class="flex gap-[24px] items-center">
                <span class="py-[8px] px-[10px] text-[#4DA934] bg-[#EDF6EB] rounded-[8px] text-[12px]">
                    Terverifikasi
                </span>
                <button class="font-[600] text-[16px] text-[#B54B0F]">
                    Ubah
                </button>
            </div>
        </div>
    </div>
    <div class="input_group">
        <label for="nama">Nomor HP</label>
        <div class="flex w-full gap-[24px]">
            <input type="text" placeholder="No HP" value="081234567890" />
            <div class="flex gap-[24px] items-center">
                <span class="py-[8px] px-[10px] text-[#4DA934] bg-[#EDF6EB] rounded-[8px] text-[12px]">
                    Terverifikasi
                </span>
                <button class="font-[600] text-[16px] text-[#B54B0F]">
                    Ubah
                </button>
            </div>
        </div>
    </div>
    <div class="input_group">
        <label for="nama">Jenis Kelamin</label>
        <div class="flex gap-[24px] w-full h-[56px]">
            <div class="flex items-center gap-[8px]">
                <input type="radio" name="jenis_kelamin" value="laki-laki" checked/>
                <span class="text-[#757575]">Laki-laki</span>
            </div>
            <div class="flex items-center gap-[8px]">
                <input type="radio" name="jenis_kelamin" value="perempuan" />
                <span class="text-[#757575]">Perempuan</span>
            </div>
        </div>
    </div>
    <div class="input_group">
        <label for="nama">Tanggal Lahir</label>
        <div class="flex gap-[24px] w-full h-[56px]">
            <select name="day">
                <option value="" disabled>Tanggal</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22" selected>22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
            </select>
            <select name="month">
                <option value="" selected disabled>Bulan</option>
                <option value="1">Januari</option>
                <option value="2">Februari</option>
                <option value="3">Maret</option>
                <option value="4">April</option>
                <option value="5">Mei</option>
                <option value="6" selected>Juni</option>
                <option value="7">Juli</option>
                <option value="8">Agustus</option>
                <option value="9">September</option>
                <option value="10">Oktober</option>
                <option value="11">November</option>
                <option value="12">Desember</option>
            </select>
            <select name="year">
                <option value="" selected disabled>Tahun</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000" selected>2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
            </select>
        </div>
    </div>
    <div class="flex">
        <button class="bg-[#B54B0F] text-white rounded-[16px] px-[24px] py-[12px]">Simpan</button>
    </div>
</form>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.input_group {
    display: flex;
    gap: 8px;
    align-items: center;

    label {
        width: 200px;
    }

    input[type=text] {
        height: 56px;
        border-radius: 8px;
        background-color: #FBFBFB;
        color: #757575;
        width: 100%;
        padding: 0 20px 0 20px;
    }

    select {
        background-color: #FBFBFB;
        height: 56px;
        width: 138px;
        border-radius: 8px;
        color: #757575;
    }

    input[type=radio] {
        accent-color: #B54B0F;
        cursor: pointer;
    }
}
</style>
